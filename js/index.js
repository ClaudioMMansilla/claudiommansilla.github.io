
document.addEventListener("DOMContentLoaded", () => {
    onInit();
});

function onInit() {
    llenarTemplateInstitucional();
    llenarTemplateAnuncios();
}


const institucionalFromAPI = [
    {
        imagen: '../assets/images/icono1.svg',
        titulo: 'SEGURIDAD',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis obcaecati natus sit harum perferendis cupiditate quisquam, eligendi magni facere, laborum suscipit quae! Repudiandae iure obcaecati aperiam fuga, facilis possimus.'
    },
    {
        imagen: '../assets/images/icono2.svg',
        titulo: 'EL MEJOR PRECIO',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis obcaecati natus sit harum perferendis cupiditate quisquam, eligendi magni facere, laborum suscipit quae! Repudiandae iure obcaecati aperiam fuga, facilis possimus.'
    },
    {
        imagen: '../assets/images/icono3.svg',
        titulo: 'A TIEMPO',
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint facilis obcaecati natus sit harum perferendis cupiditate quisquam, eligendi magni facere, laborum suscipit quae! Repudiandae iure obcaecati aperiam fuga, facilis possimus.'
    }
];



const anunciosFromAPI = [
    {
        imagen: './assets/images/anuncio1.jpg',
        titulo: 'Casa de Lujo en el Lago',
        descripcion: 'Casa en el lago con excelente vista, acabados de lujo a un excelente precio',
        precio: 'U$S350.000',
        banios: 3,
        estacionamientos: 3,
        dormitorios: 3
    },
    {
        imagen: './assets/images/anuncio2.jpg',
        titulo: 'Apartamento Moderno en el Centro',
        descripcion: 'Apartamento completamente renovado en el corazón de la ciudad, cerca de todas las comodidades',
        precio: 'U$S250.000',
        banios: 1,
        estacionamientos: 0,
        dormitorios: 2
    },
    {
        imagen: './assets/images/anuncio3.jpg',
        titulo: 'Casa con Pileta',
        descripcion: 'Casa con pileta y acabados de lujo en la ciudad, excelente oportunidad',
        precio: 'U$S275.000',
        banios: 2,
        estacionamientos: 2,
        dormitorios: 3
    }
];

// Función para llenar los items en el template y agregarlo al DOM
function llenarTemplateInstitucional() {
    const template = document.getElementById('institucional-template');
    const container = document.querySelector('.div-nosotros'); // El contenedor donde se agregarán las tarjetas

    institucionalFromAPI.forEach(item => {
        // Clonar el template
        const clone = document.importNode(template.content, true);

        // Rellenar con los items correspondientes
        const img = clone.querySelector('.card-img-top');
        img.src = item.imagen;

        const title = clone.querySelector('.card-title');
        title.textContent = item.titulo;

        const text = clone.querySelector('.card-text');
        text.textContent = item.texto;

        // Agregar al contenedor
        container.appendChild(clone);
    });
}



function llenarTemplateAnuncios() {
    const template = document.getElementById('card-template');
    const container = document.querySelector('.div-anuncios'); // Contenedor donde se agregarán las tarjetas

    anunciosFromAPI.forEach(item => {
        // Clonar el template
        const clone = document.importNode(template.content, true);

        // Rellenar con los items correspondientes
        clone.querySelector('.img-anuncio').src = item.imagen;
        clone.querySelector('.card-title').textContent = item.titulo;
        clone.querySelector('.card-text').textContent = item.descripcion;
        clone.querySelector('.card-price').textContent = item.precio;

        // Rellenar items de baños, estacionamientos y dormitorios
        const logosContainer = clone.querySelector('.card-logos');
        logosContainer.innerHTML = ''; // Limpiar contenido anterior por seguridad

        // Añadir íconos de baños, estacionamientos y dormitorios
        const icons = [
            { src: './assets/images/icono_wc.svg', alt: 'Baños', value: item.banios },
            { src: './assets/images/icono_estacionamiento.svg', alt: 'Estacionamientos', value: item.estacionamientos },
            { src: './assets/images/icono_dormitorio.svg', alt: 'Dormitorios', value: item.dormitorios }
        ];

        icons.forEach(icon => {
            const div = document.createElement('div');
            div.innerHTML = `<img src="${icon.src}" alt="${icon.alt}"> <span>${icon.value}</span>`;
            logosContainer.appendChild(div);
        });

        container.appendChild(clone);
    });
}