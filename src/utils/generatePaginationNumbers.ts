




export const generatePaginationNumbers = (currentPage: number, totalPage: number) => {


    // Si el numero total de paginas es 7 o menos vamos a mostrar todas las paginas sin los puntos suspensivos

    if (totalPage <= 7) return Array.from({ length: totalPage }, (_, i) => i + 1)

    // Si la página actual está entre las primeras 3 páginas mostrar las primeras 3, putnso suspensivos y las últimas 2
    if (currentPage <= 3) return [1, 2, 3, '...', totalPage - 1, totalPage]

    // Si la página actual esta entre las últimas 3 páginas mostrar las primeras dos, ... y las ultimas tres.
    if (currentPage >= totalPage - 2) return [1, 2, '...', totalPage - 2, totalPage - 1, totalPage];


    // Si la página actual esta en otro lugar medio mostrar la primera pagina, ..., la pagina actual y vecinos
    return [
        1, '...',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        '...',
        totalPage
    ];





}
