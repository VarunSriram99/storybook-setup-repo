import { DataConsumption, DataHub, DataIngestion } from "icons";

export const getClientApp = (subdomain) => {
  return [
    {
      name: "Data Ingestion",
      icon: DataIngestion,
      description: "Data Ingestion App",
      url: {
        development: "http://spinkart.lvh.me:9014/ingestion",
        staging: `https://${subdomain}.net/ingestion`,
        production: `https://${subdomain}.com/ingestion`,
      },
      isActive: true,
    },
    {
      name: "Data Hub",
      icon: DataHub,
      description: "Data Hub App",
      url: {
        development: "http://spinkart.lvh.me:9014/hub",
        staging: `https://${subdomain}.net/hub`,
        production: `https://${subdomain}.com/hub`,
      },
      isActive: true,
    },
    {
      name: "Data Consumption",
      icon: DataConsumption,
      description: "Data Consumption App",
      url: {
        development: "http://spinkart.lvh.me:9014/consumption",
        staging: `https://${subdomain}.net/consumption`,
        production: `https://${subdomain}.com/consumption`,
      },
      isActive: true,
    },
  ];
};
