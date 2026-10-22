import React, { useState } from 'react';
import {
  Search,
  Settings,
  User,
  ChevronRight,
  Rocket,
  BarChart2,
  CheckCircle,
  Users,
  Coffee,
  Target,
  Box,
  PiggyBank,
  Clock,
  AlertTriangle,
  ArrowUpRight,
  ArrowDown,
} from 'lucide-react';

// Constantes de colores corporativos
const COLORS = {
  blue: '#00204a',
  yellow: '#ffcc00',
  black: '#111111',
  white: '#ffffff',
  lightGray: '#f3f4f6',
};

// --- COMPONENTES DE LA PÁGINA ---

const Navbar = () => (
  <nav className="bg-[#00204a] text-white flex flex-col md:flex-row items-center justify-between px-6 py-3 sticky top-0 z-50 shadow-md">
    <div className="flex items-center space-x-4 mb-4 md:mb-0">
      <div className="bg-white text-black font-black leading-none p-1.5 text-center flex flex-col justify-center border-2 border-black">
        <span className="text-[10px] tracking-widest">SOMOS</span>
        <span className="text-[9px] tracking-tight">DUEÑOS & DUEÑAS</span>
      </div>
      <h1 className="text-sm md:text-lg font-bold border-l border-white/30 pl-4">
        Portal Roles & Responsabilidades | People Supply
      </h1>
    </div>

    <div className="flex items-center space-x-4 md:space-x-8 text-sm font-medium">
      <div className="hidden lg:flex space-x-6">
        <a href="#" className="border-b-2 border-white pb-1">
          Página Inicial
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Explorar Roles
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Inducción
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Mi Agenda
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Diario de Bordo
        </a>
        <a
          href="#"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Navegación Editar
        </a>
      </div>

      <div className="flex items-center space-x-4 bg-white/10 px-3 py-1.5 rounded-md">
        <Search
          size={18}
          className="cursor-pointer hover:text-[#ffcc00] transition-colors"
        />
        <Settings
          size={18}
          className="cursor-pointer hover:text-[#ffcc00] transition-colors"
        />
        <User
          size={18}
          className="cursor-pointer hover:text-[#ffcc00] transition-colors"
        />
      </div>
      <button className="bg-white text-[#00204a] text-xs font-bold px-4 py-2 rounded shadow hover:bg-gray-100 transition-colors hidden sm:block">
        Publicar cambios
      </button>
    </div>
  </nav>
);

const IconsBanner = () => {
  const icons = [
    { Icon: Rocket, bg: 'bg-[#ffcc00]', color: 'text-black' },
    { Icon: BarChart2, bg: 'bg-white', color: 'text-black' },
    { Icon: CheckCircle, bg: 'bg-[#d4a373]', color: 'text-black' }, // Tono café claro de la imagen
    { Icon: Users, bg: 'bg-[#111111]', color: 'text-[#ffcc00]' },
    { Icon: Coffee, bg: 'bg-[#ffcc00]', color: 'text-black' },
    { Icon: Target, bg: 'bg-white', color: 'text-black' },
    { Icon: Box, bg: 'bg-[#d4a373]', color: 'text-black' },
    { Icon: PiggyBank, bg: 'bg-[#111111]', color: 'text-[#ffcc00]' },
    { Icon: Clock, bg: 'bg-[#ffcc00]', color: 'text-black' },
    { Icon: AlertTriangle, bg: 'bg-white', color: 'text-black' },
  ];

  return (
    <div className="grid grid-cols-5 md:grid-cols-10 h-24">
      {icons.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} ${item.color} flex items-center justify-center border-r border-black/10 last:border-0`}
        >
          <item.Icon size={32} strokeWidth={1.5} />
        </div>
      ))}
    </div>
  );
};

const BrandsBanner = () => (
  <div className="bg-[#111111] text-white py-16 flex flex-col items-center justify-center text-center px-4">
    <p className="text-lg font-medium tracking-widest mb-2">Cervecería</p>
    <div className="flex items-center space-x-4 mb-6">
      <div className="w-12 h-12 bg-[#ffcc00] rounded-full flex items-center justify-center shrink-0">
        <div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-[#ffcc00] rounded-full"></div>
        </div>
      </div>
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
        ABInBev
      </h2>
    </div>
    <div className="flex flex-wrap justify-center gap-6 text-xl md:text-2xl font-serif italic text-gray-300">
      <span>Corona</span>
      <span className="font-bold text-red-500">Budweiser</span>
      <span>STELLA ARTOIS</span>
      <span className="font-bold font-sans not-italic">Becker</span>
    </div>
  </div>
);

const PrinciplesSection = () => (
  <div className="bg-[#ffcc00] p-4 md:p-8 flex flex-col lg:flex-row overflow-hidden relative">
    {/* Grid de 10 principios */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 flex-1 z-10">
      <div className="bg-white p-6 col-span-2 flex flex-col justify-center shadow-sm">
        <h3 className="text-4xl font-black text-black tracking-tighter">
          <span className="text-6xl">10</span> PRINCIPIOS
        </h3>
      </div>
      <div className="bg-[#111111] text-white p-6 flex flex-col shadow-sm">
        <Rocket className="mb-4 text-[#ffcc00]" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          1. Soñamos en grande
        </span>
      </div>
      <div className="bg-[#d4a373] text-black p-6 flex flex-col shadow-sm">
        <Coffee className="mb-4" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          5. Creamos marcas...
        </span>
      </div>

      <div className="bg-[#d4a373] text-black p-6 flex flex-col shadow-sm">
        <BarChart2 className="mb-4" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          2. Nos enfocamos en resultados
        </span>
      </div>
      <div className="bg-[#ffcc00] border-4 border-[#111111] text-black p-6 flex flex-col shadow-sm">
        <CheckCircle className="mb-4" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          3. Lideramos con el ejemplo
        </span>
      </div>
      <div className="bg-[#111111] text-[#ffcc00] p-6 flex flex-col shadow-sm">
        <Users className="mb-4" size={32} />
        <span className="text-xl font-black uppercase leading-tight text-white">
          4. Atraemos y desarrollamos gente
        </span>
      </div>
      <div className="bg-[#111111] text-white p-6 flex flex-col shadow-sm">
        <Target className="mb-4 text-[#ffcc00]" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          6. Crecemos junto a clientes
        </span>
      </div>

      <div className="bg-white text-black p-6 flex flex-col shadow-sm">
        <Box className="mb-4" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          8. Cuidamos costos
        </span>
      </div>
      <div className="bg-[#ffcc00] border-4 border-white text-black p-6 flex flex-col shadow-sm">
        <PiggyBank className="mb-4 text-white" size={32} />
        <span className="text-xl font-black uppercase leading-tight">
          9. Pensamos a largo plazo
        </span>
      </div>
    </div>

    {/* Marca de agua lateral derecha */}
    <div className="hidden lg:flex flex-col justify-center items-end pl-8 z-10 w-1/3">
      <h2
        className="text-[80px] font-black text-[#111111] leading-[0.85] text-right tracking-tighter uppercase"
        style={{ textShadow: '2px 2px 0px white' }}
      >
        SOMOS
        <br />
        DUEÑOS &<br />
        DUEÑAS
      </h2>
    </div>

    {/* Círculos decorativos de fondo */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
      <div className="w-64 h-64 border-[40px] border-[#111111] rounded-full absolute -top-10 -left-10"></div>
      <div className="w-96 h-96 border-[60px] border-white rounded-full absolute bottom-[-100px] left-1/3"></div>
    </div>
  </div>
);

const BigTitlesSection = () => (
  <div className="bg-[#ffcc00] py-16 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
    <div className="bg-[#111111] w-full py-4 transform -skew-y-2 mb-4 shadow-xl">
      <h2 className="text-6xl md:text-8xl font-black text-[#ffcc00] tracking-tighter uppercase transform skew-y-2">
        PEOPLE SUPPLY
      </h2>
    </div>

    <div className="bg-white w-full py-3 mb-16 shadow-xl">
      <h2 className="text-4xl md:text-7xl font-black text-[#111111] tracking-tighter uppercase">
        ROLES & RESPONSABILIDADES
      </h2>
    </div>

    <ArrowUpRight size={48} className="text-[#111111] mb-8 animate-bounce" />

    <div className="space-y-4 text-xl md:text-3xl font-medium text-[#111111]">
      <p className="border-b border-[#111111] pb-2 px-12 cursor-pointer hover:font-bold transition-all">
        Entiende tu Rol
      </p>
      <p className="border-b border-[#111111] pb-2 px-12 cursor-pointer hover:font-bold transition-all">
        Conoce tus Rutinas
      </p>
      <p className="border-b border-[#111111] pb-2 px-12 cursor-pointer hover:font-bold transition-all font-bold">
        Accede a la documentación vigente
      </p>
    </div>

    <ArrowDown size={64} className="text-[#111111] mt-12 animate-pulse" />
  </div>
);

// --- COMPONENTE PRINCIPAL DE TARJETAS DE ROLES (DINÁMICO) ---
const RolesSection = () => {
  // Estado simulado (Borrador de lo que vendría de tu base de datos)
  const [rolesData] = useState([
    {
      id: 1,
      title: 'Soporte de Gente Envasado',
      areaInfo: 'Soportes · Gente · Full Time',
      responsable: 'Tapia Jofre, Maria Elena',
      areaTag: 'Envasado',
      statusTag: '25% VIGENTE',
      statusColor: 'text-red-700 bg-red-100 border-red-200',
      documents: [
        {
          type: 'JOB DESCRIPTION',
          status: 'En revisión',
          date: '7/9/2026',
          isGreen: false,
        },
        {
          type: 'PLAN DE INDUCCIÓN',
          status: 'En revisión',
          date: '9/6/2025',
          isGreen: false,
        },
        {
          type: 'MI AGENDA DE ROL',
          status: 'Vigente',
          date: '26/7/2026',
          isGreen: true,
        },
        {
          type: 'DIARIO DE BORDO',
          status: 'En revisión',
          date: '26/5/2025',
          isGreen: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Soporte de Gestión en Elaboración',
      areaInfo: 'Soportes · Gestión · Full Time',
      responsable: 'Vigo, Nicolas Agustin',
      areaTag: 'Elaboración',
      statusTag: '50% VIGENTE',
      statusColor: 'text-amber-700 bg-amber-100 border-amber-200',
      documents: [
        {
          type: 'JOB DESCRIPTION',
          status: 'En revisión',
          date: '7/3/2022',
          isGreen: false,
        },
        {
          type: 'PLAN DE INDUCCIÓN',
          status: 'Vigente',
          date: '30/6/2025',
          isGreen: true,
        },
        {
          type: 'MI AGENDA DE ROL',
          status: 'Vigente',
          date: '26/7/2026',
          isGreen: true,
        },
        {
          type: 'DIARIO DE BORDO',
          status: 'En revisión',
          date: '26/8/2026',
          isGreen: false,
        },
      ],
    },
  ]);

  return (
    <div className="bg-white min-h-screen py-16 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">
          Últimos Roles Actualizados
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Consulta la documentación vigente, inducción, agenda y rutinas
          asociadas a cada Rol.
        </p>

        <h3 className="text-xl font-bold text-[#111111] border-b-2 border-gray-200 pb-2 mb-6">
          Rol
        </h3>

        <div className="space-y-8">
          {rolesData.map((role) => (
            <div
              key={role.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col relative transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Borde lateral azul corporativo */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#00204a]"></div>

              <div className="p-6 md:p-8 pl-10">
                {/* Cabecera de la tarjeta */}
                <div className="flex flex-col md:flex-row justify-between md:items-start mb-6 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 text-green-800 font-bold text-lg flex items-center justify-center rounded shrink-0">
                      SO
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#111111] leading-tight">
                        {role.title}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {role.areaInfo}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Responsable: {role.responsable}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-200">
                      {role.areaTag}
                    </span>
                    <span
                      className={`px-4 py-1 text-xs font-bold rounded-full border ${role.statusColor}`}
                    >
                      {role.statusTag}
                    </span>
                  </div>
                </div>

                {/* Grid de Documentos (Interactivos) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {role.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md hover:-translate-y-1 ${
                        doc.isGreen
                          ? 'bg-[#f0fdf4] border-[#bbf7d0] hover:border-green-400'
                          : 'bg-[#fffbeb] border-[#fef08a] hover:border-amber-400'
                      }`}
                      onClick={() =>
                        console.log(`Abrir SharePoint Excel: ${doc.type}`)
                      }
                    >
                      <p className="text-xs font-black text-gray-700 mb-3 tracking-wide">
                        {doc.type}
                      </p>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            doc.isGreen ? 'bg-green-500' : 'bg-amber-500'
                          }`}
                        ></span>
                        <p
                          className={`text-sm font-bold ${
                            doc.isGreen ? 'text-green-700' : 'text-amber-700'
                          }`}
                        >
                          {doc.status}
                        </p>
                      </div>
                      <p className="text-[11px] text-gray-500">
                        Actualizado {doc.date}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón inferior de la tarjeta */}
              <div className="bg-gray-50 py-3 px-6 flex justify-center border-t border-gray-100">
                <button className="flex items-center gap-2 bg-[#00204a] text-white text-xs font-bold px-6 py-2 rounded shadow hover:bg-blue-900 transition-colors">
                  Ver ficha completa <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="bg-[#00204a] text-white font-bold text-sm px-8 py-3 rounded shadow-lg hover:bg-blue-900 transition-all hover:scale-105">
            Ver Todos los Roles
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <div className="bg-[#111111] py-16 flex flex-col lg:flex-row items-center justify-center lg:justify-around px-8 overflow-hidden relative">
    <h2
      className="text-6xl md:text-[100px] font-black text-[#ffcc00] tracking-tighter uppercase mb-8 lg:mb-0 z-10"
      style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.5)' }}
    >
      PEOPLE
      <br />
      SUPPLY
    </h2>
    <div className="flex flex-col items-center z-10">
      <p className="text-white text-xl font-medium tracking-widest mb-4">
        Cervecería
      </p>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-[#ffcc00] rounded-full flex items-center justify-center shrink-0">
          <div className="w-8 h-8 bg-[#111111] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-[#ffcc00] rounded-full"></div>
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
          ABInBev
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-serif italic text-gray-400">
        <span>Corona</span>
        <span className="font-bold text-gray-300">Budweiser</span>
        <span>STELLA ARTOIS</span>
        <span className="font-bold font-sans not-italic text-gray-300">
          Becker
        </span>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans selection:bg-[#ffcc00] selection:text-black">
      <Navbar />
      <IconsBanner />
      <BrandsBanner />
      <PrinciplesSection />
      <BigTitlesSection />
      <RolesSection />
      <Footer />
    </div>
  );
}
