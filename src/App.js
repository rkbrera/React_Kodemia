import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

function App() {
  const products = [
    {
      name: "Máscara De Látex Playera Hombre Superman DC The Man of Tomorrow",
      product: "Playera",
      description:
        "¡La nueva colección genderless de DC ya está aquí! 👊 La justicia nunca se vio tan bien. ¡Llévala puesta! 😎 En esta liga hay un lugar para ti. ¡Únete ya! 💪 HAZLE JUSTICIA A TU OUTFIT ¡Muéstrale al mundo tu fuerza interior! Llévate esta increíble colección genderless con lo mejor de DC.",
      cover: "https://m.media-amazon.com/images/I/41b1LLROAkL._AC_SX679_.jpg",
      url: "https://www.amazon.com.mx/M%C3%A1scara-L%C3%A1tex-Superman-Tomorrow-Talla-CH/dp/B0BDSR75W3/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=XHDCM&content-id=amzn1.sym.94874bb0-74e9-4fb8-849c-bd671ff5a5f4%3Aamzn1.symc.40e6a10e-cbc4-4fa5-81e3-4435ff64d03b&pf_rd_p=94874bb0-74e9-4fb8-849c-bd671ff5a5f4&pf_rd_r=TE4YAA2ES3EAX28GKNNC&pd_rd_wg=LfP0M&pd_rd_r=fc72fef8-a05b-483d-8c36-bed9c854c993&pd_rd_i=B0BDSR75W3&th=1&psc=1",
    },
    {
      name: "YEYIAN Teclado Gamer YTM-28207R ASWARD S3000 MECANICO Switch Rojo RGB",
      product: "Teclado Mecánico",
      description: "Teclado mecánico Multimedia con Luz RGB ASWARD S3000 ",
      cover:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/2915fe2f-26bd-40fe-9106-1ab5c2b117f9.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      url: "https://www.amazon.com.mx/gp/product/B096DNB11M/ref=ewc_pr_img_1?smid=A8OGGAIXWK0B7&psc=1",
    },
    {
      name: "NORTIV 8 - Botas Impermeables para Hombre.",
      product: "Botas para Caballero",
      description:
        "Un par de botas de senderismo que ofrecen la mezcla adecuada de comodidad y rendimiento para tus actividades al aire libre es esencial.",
      cover: "https://m.media-amazon.com/images/I/71cn6gEilkL._AC_SY625_.jpg",
      url: "https://www.amazon.com.mx/gp/product/B07P99F9M7/ref=ox_sc_saved_image_2?smid=ABB9OQDQJ01FR&th=1&psc=1",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              name={product.name}
              episode={product.episode}
              description={product.description}
              cover={product.cover}
              url={product.url}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
