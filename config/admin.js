module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '796e25a7503b9552a57d4f4e92243c5e'),
  },
});
