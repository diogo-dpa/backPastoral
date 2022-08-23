"use strict";

/**
 *  pessoa controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::pessoa.pessoa", ({ strapi }) => ({
  async buscarPessoasPorFiltros(ctx) {
    try {
      const body = ctx.request.body;

      const serviceResponse = await strapi
        .service("api::pessoa.pessoa")
        .buscaPessoas({
          ...body,
        });

      const sanitizedEntity = await this.sanitizeOutput(serviceResponse, ctx);
      return this.transformResponse(sanitizedEntity);
    } catch (err) {
      console.log(err.message);
    }
  },
}));
