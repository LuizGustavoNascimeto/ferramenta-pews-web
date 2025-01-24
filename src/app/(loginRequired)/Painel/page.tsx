import Card from "@/components/ui/card";


export default function Painel() {
  

  return (
    <div className="flex flex-col justify-start w-full gap-10">
      <h1 className="font-semibold text-4xl">Painel</h1>
      <div>
        <h2 className="font-medium text-2xl">Espaços de trabalho</h2>
        <div>
          <div className="grid grid-cols-4 place-items-center rounded-md w-full py-3 px-5">
            <h3>Nome</h3>
            <h3>Data de inscrição</h3>
            <h3></h3>
            <h3>Configuração</h3>
          </div>
          <Card name="Hospital UEMmmm" dateAvaluation="20/12/2024" pewsPontuation=""></Card>
        </div>
      </div>
      <div>
        <h2 className="font-medium text-2xl">Pacientes recentes</h2>
        <div>
          <div className="grid grid-cols-4 place-items-center rounded-md w-full py-3 px-5">
            <h3>Nome</h3>
            <h3>Data de avaliação</h3>
            <h3>Pontuação</h3>
            <h3>Configuração</h3>
          </div>
          <Card name="Jordana" dateAvaluation="20/12/2024" pewsPontuation="5"></Card>
        </div>
      </div>
    </div>
  );
}
