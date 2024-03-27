var FilmeModel = new function () {
    model = this;
    this.filmes = ko.observable ([
        {
            "IdFilme": 1,
            "Titulo": "interestelar",
            "AnoLancamento": "2014",
            "Genero": "ficção cientifica",
            "Produtora": "abril"
        }
    ]);

    model.carregar = function () {
        var settings = {
        "url": "http://localhost:50970/api/filmes",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        model.filmes(response);
    });
};
model.carregar();
}

ko.applyBindings(FilmeModel);