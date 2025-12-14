import createUserTable from "../module/user/user.model.js";

const initDB = async () => {
    await createUserTable();
    console.log("✅ All tables are ready");
};

export default initDB;

