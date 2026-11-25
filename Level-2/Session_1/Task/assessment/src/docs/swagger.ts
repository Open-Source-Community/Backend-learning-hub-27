import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sindbad's Treasure Vault API",
      version: "1.0.0",
      description: "Assessment API",
    },
    servers: [{ url: "http://localhost:3000" }],
    // TODO: add components.securitySchemes.bearerAuth (type http, scheme bearer, bearerFormat JWT)
  },
  apis: ["./src/routes/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
