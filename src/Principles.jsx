import React, { useState } from 'react';

const leftTop = [
  {
    id: 1,
    img: "/Principios/1.png",
    fallbackBg: "#121317",
    width: "w-full lg:w-[28%]",
    desc: "Un gran sueño nos inspira, impulsa nuestro negocio y nos guía en torno a los mismos objetivos y propósito: crear un futuro con más motivos para brindar. Independiente de nuestra función en la compañía, todos los dueños y dueñas definimos, perseguimos y trabajamos juntos para lograr objetivos ambiciosos. Los grandes sueños requieren mucho trabajo, colaboración y pasión. Deben ser factibles para que podamos comprometernos y darles vida."
  }
];

const leftBottom = [
  {
    id: 2,
    img: "/Principios/2.png",
    fallbackBg: "#C99B3B",
    width: "w-full lg:w-[28.5%]",
    desc: "Como dueños y dueñas sabemos reconocer que no podemos ser y hacer todo para todos. Nuestro enfoque en los resultados nos guía a medida que invertimos nuestro tiempo y energía en lo que es esencial para el negocio. Los dueños y dueñas buscamos resultados excepcionales, a través de la evolución continua, siempre elevando la vara y celebrando los logros."
  },
  {
    id: 3,
    img: "/Principios/3.png",
    fallbackBg: "#F7E600",
    width: "w-full lg:w-[46%]",
    desc: "Como dueños y dueñas, nuestras acciones importan más que las palabras. Lideramos con el ejemplo y hacemos lo que decimos. Asumimos la responsabilidad de manera personal. En una compañía de dueños y dueñas no existe el “este no es mi problema”."
  },
  {
    id: 4,
    img: "/Principios/4.png",
    fallbackBg: "#A6A8AB",
    width: "w-full lg:w-[25.5%]",
    desc: "La gente excelente vive nuestros 10 principios, proviene de cualquier lugar, con diferentes trayectorias y orígenes, son apasionados, colaborativos y diversos. Como líderes, invertimos nuestro tiempo para atraer y desarrollar personas excelentes, crear oportunidades para su crecimiento y formar equipos de alta performance."
  }
];

const rightTop = [
  {
    id: 5,
    img: "/Principios/5.png",
    fallbackBg: "#EDB92E",
    width: "w-full lg:w-[42.5%]",
    desc: "Cada uno de nosotros tenemos un papel en la protección, el crecimiento y la creación de marcas que los consumidores amen. Como dueños y dueñas mantenemos a nuestros consumidores en el centro de todo lo que hacemos, actuamos con creatividad e innovación, aprendiendo y entendiendo siempre quiénes son y qué valoran."
  },
  {
    id: 6,
    img: "/Principios/6.png",
    fallbackBg: "#121317",
    width: "w-full lg:w-[32.5%]",
    desc: "Construimos relaciones sólidas con nuestros clientes y socios brindándoles productos, conocimientos y servicios de valor superior. Crecemos cuando nuestros clientes crecen. Como dueños y dueñas, reconocemos la responsabilidad que conlleva ser un líder global. Impactamos positivamente en nuestras comunidades locales fomentando prácticas sostenibles. Prosperamos cuando nuestras comunidades prosperan."
  },
  {
    id: 7,
    img: "/Principios/7.png",
    fallbackBg: "#A6A8AB",
    width: "w-full lg:w-[25%]",
    desc: "Como dueños y dueñas creemos que la simplicidad libera todo el potencial de escalabilidad. La simplicidad crea claridad, velocidad y consistencia en la ejecución. Tomamos decisiones basadas en data y el sentido común para identificar y escalar las mejores prácticas. A través de la tecnología, potenciamos nuestra plataforma que nos permite ejecutar con excelencia."
  }
];

const rightBottom = [
  {
    id: 8,
    img: "/Principios/8.png",
    fallbackBg: "#121317",
    width: "w-full lg:w-[49%]",
    desc: "Como dueños y dueñas, solo gastamos lo que necesitamos y cuando lo necesitamos. Ser prudentes y disciplinados en cuanto a nuestros costos y recursos nos da la libertad de invertir más en lo que los clientes y consumidores realmente valoran."
  },
  {
    id: 9,
    img: "/Principios/9.png",
    fallbackBg: "#C99B3B",
    width: "w-full lg:w-[26%]",
    desc: "Como dueños y dueñas, somos responsables de los impactos a largo plazo de las decisiones e inversiones que hacemos hoy. No sacrificamos la creación de valor a largo plazo de nuestra compañía por resultados a corto plazo."
  },
  {
    id: 10,
    img: "/Principios/10.png",
    fallbackBg: "#F7E600",
    width: "w-full lg:w-[25%]",
    desc: "Como dueños y dueñas, no tomamos atajos y actuamos con ética e integridad. La seguridad de nuestra gente, la calidad de nuestros productos y nuestra reputación nunca pueden verse comprometidas. No hay sustituto para el trabajo duro, la consistencia y el pensamiento a largo plazo."
  }
];

function sampleImageColor(imgElement, setBgColor) {
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    const ctx = canvas.getContext('2d');
    const sampleX = Math.max(2, Math.floor(imgElement.naturalWidth * 0.06));
    const sampleY = Math.max(2, Math.floor(imgElement.naturalHeight * 0.06));
    ctx.drawImage(imgElement, sampleX, sampleY, 1, 1, 0, 0, 1, 1);
    const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
    if (a > 200) {
      setBgColor(`rgb(${r}, ${g}, ${b})`);
    }
  } catch (err) {}
}

function PrincipleCard({ item, isHovered, isRowHovered, onHover, onLeave }) {
    const [bgColor, setBgColor] = useState(item.fallbackBg);
    const baseWeight = parseFloat(item.width.match(/[\d.]+/)?.[0] || 30);
  
    const currentFlexGrow =
      item.id === 1
        ? isHovered
          ? 56
          : isRowHovered
          ? 20
          : 28
        : isHovered
        ? baseWeight * 1.55 + 20 // Subimos un poco el multiplicador para ganar más ancho en todas las tarjetas
        : isRowHovered
        ? baseWeight * 0.82
        : baseWeight;
  
    return (
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
          backgroundColor: bgColor,
          flexGrow: currentFlexGrow,
          flexShrink: 1,
          flexBasis: '0%'
        }}
        className={`group relative h-56 lg:h-full w-full min-h-0 min-w-0 overflow-hidden cursor-pointer transition-all duration-500 ease-out flex items-center justify-center rounded-[2px] ${
          isHovered ? 'shadow-xl z-30' : 'shadow-sm z-10'
        }`}
      >
        <img
          src={item.img}
          alt={`Principio ${item.id}`}
          crossOrigin="anonymous"
          onLoad={(e) => sampleImageColor(e.currentTarget, setBgColor)}
          className="w-[94%] h-[94%] max-h-full max-w-full object-contain transition-all duration-500 ease-out group-hover:delay-[280ms] group-hover:scale-95 group-hover:opacity-10"
        />
  
        {/* Panel de texto: Cambiamos a items-stretch para aprovechar todo el ancho */}
        <div className="absolute inset-0 p-3.5 sm:p-5 flex flex-col items-stretch justify-center bg-black/90 backdrop-blur-[2px] text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ease-out delay-0 group-hover:delay-[280ms] overflow-y-auto">
          {/* Título centrado */}
          <div className="text-center shrink-0">
            <span className="inline-block text-[#FFCC00] font-extrabold mb-2 uppercase tracking-widest text-[11px] sm:text-xs border-b border-[#FFCC00]/40 pb-0.5">
              Principio {item.id}
            </span>
          </div>
          
          {/* Párrafo justificado y sin max-w-prose para que llene todo el ancho disponible */}
          <p className="text-[13px] xl:text-[14px] font-normal leading-[1.42] text-slate-100 text-justify w-full px-1">
            {item.desc}
          </p>
        </div>
      </div>
    );
  }

export default function PrinciplesGrid() {
  const [titleBg, setTitleBg] = useState("#EFEFEF");
  const [hoveredId, setHoveredId] = useState(null);

  const isLeftTopHovered = hoveredId === 'titulo' || hoveredId === 1;
  const isLeftBottomHovered = [2, 3, 4].includes(hoveredId);
  const isLeftHovered = isLeftTopHovered || isLeftBottomHovered;

  const isRightTopHovered = [5, 6, 7].includes(hoveredId);
  const isRightBottomHovered = [8, 9, 10].includes(hoveredId);
  const isRightHovered = isRightTopHovered || isRightBottomHovered;

  // Balance horizontal suave entre Izquierda y Derecha (evita aplastar el bloque opuesto)
  const leftBlockGrow = isLeftHovered ? 48 : isRightHovered ? 39 : 43.5;
  const rightBlockGrow = isRightHovered ? 61 : isLeftHovered ? 52 : 56.5;

  // Balance vertical controlado: la fila activa crece a ~56-62% sin desbordar ni asfixiar la otra fila
  const leftTopRowGrow = isLeftTopHovered ? 75 : isLeftBottomHovered ? 37 : 43;
  const leftBottomRowGrow = isLeftBottomHovered ? 63 : isLeftTopHovered ? 46 : 57;

  const rightTopRowGrow = isRightTopHovered ? 57 : isRightBottomHovered ? 43 : 50;
  const rightBottomRowGrow = isRightBottomHovered ? 57 : isRightTopHovered ? 43 : 50;

  // Proporción de la tarjeta "10 Principios" en relación con el Principio 1
  const titleCardGrow =
    hoveredId === 'titulo'
      ? 80
      : hoveredId === 1
      ? 44
      : 72;

  return (
    <div className="w-full bg-[#FFCC00] py-8 px-4 sm:px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Altura fija de 470px con min-h-0 y overflow-hidden para impedir cualquier desborde */}
        <div className="flex flex-col lg:flex-row gap-3 lg:h-[470px] min-h-0 w-full overflow-hidden transition-all duration-500 ease-out">
          
          {/* BLOQUE IZQUIERDO */}
          <div
            style={{ flexGrow: leftBlockGrow, flexShrink: 1, flexBasis: '0%' }}
            className="w-full flex flex-col gap-3 h-full min-h-0 min-w-0 overflow-hidden transition-all duration-500 ease-out"
          >
            {/* Fila Superior Izquierda */}
            <div
              style={{ flexGrow: leftTopRowGrow, flexShrink: 1, flexBasis: '0%' }}
              className="flex flex-col sm:flex-row gap-3 w-full min-h-0 min-w-0 overflow-hidden transition-all duration-500 ease-out"
            >
              {/* Tarjeta Título ("10 Principios") */}
              <div
                onMouseEnter={() => setHoveredId('titulo')}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor: titleBg,
                  flexGrow: titleCardGrow,
                  flexShrink: 1,
                  flexBasis: '0%'
                }}
                className={`w-full h-40 lg:h-full min-h-0 min-w-0 flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500 ease-out rounded-[2px] ${
                  hoveredId === 'titulo' ? 'shadow-xl z-30' : 'shadow-sm z-10'
                }`}
              >
                <img
                  src="/Principios/Título.png"
                  alt="10 Principios"
                  crossOrigin="anonymous"
                  onLoad={(e) => sampleImageColor(e.currentTarget, setTitleBg)}
                  className={`w-[92%] h-[92%] max-h-full max-w-full object-contain transition-transform duration-500 ease-out ${
                    hoveredId === 'titulo' ? 'scale-105' : 'scale-100'
                  }`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/Principios/Titulo.png";
                  }}
                />
              </div>

              {leftTop.map((item) => (
                <PrincipleCard
                  key={item.id}
                  item={item}
                  isHovered={hoveredId === item.id}
                  isRowHovered={isLeftTopHovered}
                  onHover={() => setHoveredId(item.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>

            {/* Fila Inferior Izquierda */}
            <div
              style={{ flexGrow: leftBottomRowGrow, flexShrink: 1, flexBasis: '0%' }}
              className="flex flex-col sm:flex-row gap-3 w-full min-h-0 min-w-0 overflow-hidden transition-all duration-500 ease-out"
            >
              {leftBottom.map((item) => (
                <PrincipleCard
                  key={item.id}
                  item={item}
                  isHovered={hoveredId === item.id}
                  isRowHovered={isLeftBottomHovered}
                  onHover={() => setHoveredId(item.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>
          </div>

          {/* BLOQUE DERECHO */}
          <div
            style={{ flexGrow: rightBlockGrow, flexShrink: 1, flexBasis: '0%' }}
            className="w-full flex flex-col gap-3 h-full min-h-0 min-w-0 overflow-hidden transition-all duration-500 ease-out"
          >
            {/* Fila Superior Derecha */}
            <div
              style={{ flexGrow: rightTopRowGrow, flexShrink: 1, flexBasis: '0%' }}
              className="flex flex-col sm:flex-row gap-3 w-full min-h-0 min-w-0 overflow-hidden transition-all duration-500 ease-out"
            >
              {rightTop.map((item) => (
                <PrincipleCard
                  key={item.id}
                  item={item}
                  isHovered={hoveredId === item.id}
                  isRowHovered={isRightTopHovered}
                  onHover={() => setHoveredId(item.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>

            {/* Fila Inferior Derecha */}
            <div
              style={{ flexGrow: rightBottomRowGrow, flexShrink: 1, flexBasis: '0%' }}
              className="flex flex-col sm:flex-row gap-3 w-full min-h-0 min-w-0 overflow-hidden transition-all duration-500 ease-out"
            >
              {rightBottom.map((item) => (
                <PrincipleCard
                  key={item.id}
                  item={item}
                  isHovered={hoveredId === item.id}
                  isRowHovered={isRightBottomHovered}
                  onHover={() => setHoveredId(item.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}