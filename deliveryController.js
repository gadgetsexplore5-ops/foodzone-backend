import db from "../db.js";

// HAVERSINE FORMULA
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// DELIVERY CHARGE CALCULATION
export const calculateDelivery = (req, res) => {
  const { user_lat, user_lng, vendor_lat, vendor_lng } = req.body;

  const distance = calculateDistance(
    parseFloat(user_lat),
    parseFloat(user_lng),
    parseFloat(vendor_lat),
    parseFloat(vendor_lng)
  );

  db.query("SELECT * FROM settings WHERE id=1", (err, rows) => {
    if (err) return res.status(500).json({ error: err });

    const { free_km, base_charge, extra_km_charge } = rows[0];

    let charge = 0;

    if (distance <= free_km) {
      charge = base_charge;
    } else {
      const extraKm = distance - free_km;
      charge = base_charge + extraKm * extra_km_charge;
    }

    res.json({
      distance_km: distance.toFixed(2),
      delivery_charge: charge.toFixed(2)
    });
  });
};
