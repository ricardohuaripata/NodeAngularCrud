import { Sequelize } from "sequelize";

const sequelize = new Sequelize("almacen","ricardohuaripata","ricardohuaripata",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default sequelize;