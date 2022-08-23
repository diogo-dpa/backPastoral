module.exports = {
  routes: [
    {
      method: "POST",
      path: "/pessoas/buscarPessoasPorFiltros",
      handler: "pessoa.buscarPessoasPorFiltros",
      config: {
        auth: false,
      },
    },
  ],
};
