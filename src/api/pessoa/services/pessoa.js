"use strict";

/**
 * pessoa service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::pessoa.pessoa", ({ strapi }) => ({
  async buscaPessoas(args) {
    if (!Object.keys(args).some((x) => x)) return [];

    const entries = await strapi.entityService.findMany("api::pessoa.pessoa", {
      filters: mountObjectWithExistingArgs(Object.entries(args)),
    });
    return entries;
  },
}));

function mountObjectWithExistingArgs(entriesParameters) {
  const responseObject = {};
  entriesParameters.forEach((item) => {
    const [key, value] = item;
    if (key) {
      responseObject[key] = {
        $contains: value,
      };
    }
  });

  return responseObject;
}
