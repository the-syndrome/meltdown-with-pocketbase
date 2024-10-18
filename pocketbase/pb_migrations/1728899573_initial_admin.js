const { POCKETBASE_ADMIN_EMAIL, POCKETBASE_ADMIN_PASSWORD } = process.env;

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const admin = new Admin();
  admin.email = POCKETBASE_ADMIN_EMAIL;
  admin.setPassword(POCKETBASE_ADMIN_PASSWORD);
  return dao.saveAdmin(admin);
}, (db) => {
  const dao = new Dao(db);
  try {
    const admin = dao.findAdminByEmail(POCKETBASE_ADMIN_EMAIL);
    dao.deleteAdmin(admin);
  } catch(err) {
    const { message, stack } = err;
    console.error("error tearing down initial admin", message, stack);
  }
});