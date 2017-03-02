var db = {};
db.dbListPosts = {};
export const resetDb = () => {
  delete db.dbListPosts;
};
export default db;
