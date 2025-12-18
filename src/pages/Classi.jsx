import Navbar from "../components/Navbar";
import CardCalendario from "../components/CardCalendario";
import SectionClassi from "../components/SectionClassi";

export default function Calendario() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c0e]">
      <Navbar />

      <section
        id="calendario"
        className="w-full mt-20 flex flex-col items-center"
        data-aos="fade-up"
      >
        <h2 className="font-grace text-5xl  font-covered font-bold mb-8 text-center flex items-center justify-center gap-2 text-green-600">
          Calendario settimanale
          {/* SVG pin rosso */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-red-600"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
          </svg>
        </h2>

        {/* Griglia giorni */}
        <div
          className="w-full flex justify-center flex-wrap gap-6 mt-6"
          role="list"
        >
          {/* Lunedì */}
          <CardCalendario
            giorno="Lunedì"
            lezioni={[
              {
                orario: "15:30 - 18:30",
                scuola: "ALMADANZA sede ROVERI (BO)",
                link: "https://www.google.com/maps/place/Alma+Studios+-+Corsi+di+Danza,+Fitness,+Musica+e+Teatro/@44.4975029,11.395209,17z/data=!4m14!1m7!3m6!1s0x477e2b66a2134191:0x24d4b405a3238740!2sAlma+Studios+-+Corsi+di+Danza,+Fitness,+Musica+e+Teatro!8m2!3d44.4974991!4d11.3977839!16s%2Fg%2F11cs0rgz24!3m5!1s0x477e2b66a2134191:0x24d4b405a3238740!8m2!3d44.4974991!4d11.3977839!16s%2Fg%2F11cs0rgz24?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
              {
                orario: "19:30 - 20:30",
                scuola: "JUMP DANCE STUDIO - SAN LAZZARO (BO)",
                link: "https://www.google.com/maps/place/JUMP+DANCE+STUDIO/@44.4650751,11.4224616,17z/data=!4m14!1m7!3m6!1s0x477e2bb54023de99:0x5d0f80493fcb38fb!2sJUMP+DANCE+STUDIO!8m2!3d44.4650713!4d11.4250365!16s%2Fg%2F11f_0zhnft!3m5!1s0x477e2bb54023de99:0x5d0f80493fcb38fb!8m2!3d44.4650713!4d11.4250365!16s%2Fg%2F11f_0zhnft?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
            ]}
          />

          {/* Martedì */}
          <CardCalendario
            giorno="Martedì"
            lezioni={[
              {
                orario: "17:30 - 21:30",
                scuola: "ALMADANZA sede CASALECCHIO (BO)",
                link: "https://www.google.com/maps/place/Alma+Studios+-+Corsi+di+Danza,+Fitness,+Musica+e+Teatro/@44.482003,11.2764672,16z/data=!4m10!1m2!2m1!1salmadanza+caselecchio!3m6!1s0x477fd531228709af:0x8e17d1cf20009b5f!8m2!3d44.4868081!4d11.2761885!15sChVhbG1hZGFuemEgY2FzZWxlY2NoaW9aFyIVYWxtYWRhbnphIGNhc2VsZWNjaGlvkgERY29tbXVuaXR5X2NvbGxlZ2WaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTm9jRTVxWnpKQlJSQULgAQD6AQQIABBE!16s%2Fg%2F11gxmv2gl0?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
            ]}
          />

          {/* Mercoledì */}
          <CardCalendario
            giorno="Mercoledì"
            lezioni={[
              {
                orario: "17:00 - 20:30",
                scuola: "JUMP DANCE STUDIO - SAN LAZZARO (BO)",
                link: "https://www.google.com/maps/place/JUMP+DANCE+STUDIO/@44.4650751,11.4224616,17z/data=!4m14!1m7!3m6!1s0x477e2bb54023de99:0x5d0f80493fcb38fb!2sJUMP+DANCE+STUDIO!8m2!3d44.4650713!4d11.4250365!16s%2Fg%2F11f_0zhnft!3m5!1s0x477e2bb54023de99:0x5d0f80493fcb38fb!8m2!3d44.4650713!4d11.4250365!16s%2Fg%2F11f_0zhnft?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
            ]}
          />

          {/* Giovedì */}
          <CardCalendario
            giorno="Giovedì"
            lezioni={[
              {
                orario: "17:00 - 18:00",
                scuola: "TOMMY'S DANCE SCHOOL - CASTEL SAN PIETRO TERME (BO)",
                link: "https://www.google.com/maps/place/Tommy'S+Dance+School+-+Associazione+Sportiva+Dilettantistica/@44.4026978,11.5797449,17z/data=!4m14!1m7!3m6!1s0x132b333026a98ddd:0x7f0f34d100b05053!2sTommy'S+Dance+School+-+Associazione+Sportiva+Dilettantistica!8m2!3d44.402694!4d11.5823198!16s%2Fg%2F11c2plq4hm!3m5!1s0x132b333026a98ddd:0x7f0f34d100b05053!8m2!3d44.402694!4d11.5823198!16s%2Fg%2F11c2plq4hm?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
            ]}
          />

          {/* Venerdì */}
          <CardCalendario
            giorno="Venerdì"
            lezioni={[
              {
                orario: "17:00 - 20:00",
                scuola: "JUMP DANCE STUDIO - SAN LAZZARO (BO)",
                link: "https://www.google.com/maps/place/JUMP+DANCE+STUDIO/@44.4650751,11.4224616,17z/data=!4m14!1m7!3m6!1s0x477e2bb54023de99:0x5d0f80493fcb38fb!2sJUMP+DANCE+STUDIO!8m2!3d44.4650713!4d11.4250365!16s%2Fg%2F11f_0zhnft!3m5!1s0x477e2bb54023de99:0x5d0f80493fcb38fb!8m2!3d44.4650713!4d11.4250365!16s%2Fg%2F11f_0zhnft?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
              {
                orario: "20:30 - 22:00",
                scuola: "KIA DANCE COMPANY - BOLOGNA (BO)",
                link: "https://www.google.com/maps/place/Kia+Dance+Company+A.s.d./@44.4889188,11.372166,17z/data=!4m14!1m7!3m6!1s0x477e2b4848884477:0xb9b8d6c8b53dafba!2sKia+Dance+Company+A.s.d.!8m2!3d44.488915!4d11.3747409!16s%2Fg%2F11bw4dmvjg!3m5!1s0x477e2b4848884477:0xb9b8d6c8b53dafba!8m2!3d44.488915!4d11.3747409!16s%2Fg%2F11bw4dmvjg?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D",
              },
            ]}
          />
        </div>
        <SectionClassi />
      </section>
    </div>
  );
}
