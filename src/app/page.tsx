'use client'

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import backgroundImagePews from '../public/pews-background.png'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <header className="flex justify-between items-center p-2 fixed bg-transparent w-full ">
        <Button onClick={() => router.push('/entrar')}>Entrar</Button>
        <h1 className="font-semibold text-base">Ferramenta PEWS</h1>
      </header>
      
      <div className="flex flex-col justify-center items-center h-[90vh] gap-10">
        <div>
          <h1 className="font-semibold text-9xl">PEWS</h1>
          <h2 className="text-xl">Pontuação de Alerta Precoce Pediátrico</h2>
        </div>
        <Image src={backgroundImagePews} alt="Background" fill quality={100} priority className="absolute inset-0 z-[-1] object-cover"></Image>
        <Button>Quero testar</Button>
      </div>

      <div className="bg-primary h-[20vh] flex justify-center items-center">
        <h1 className="text-5xl">Conheça o Pediatric Early Warning Score - PEWS, e como utilizar a ferramenta</h1>
      </div>

      <div className="flex justify-center items-center px-40 py-10">
        <p className="text-xl">
        Ferramenta PEWS serve para tal tal  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta aliquet sem, et rutrum risus. Aenean id tincidunt dolor, vel aliquam est. Integer consectetur, ante in consectetur suscipit, sem lacus ultricies eros, sit amet congue metus lacus vel est. Aenean risus augue, dapibus quis placerat id, faucibus a libero. Vivamus tincidunt ac metus quis imperdiet. Fusce lacus eros, varius id rutrum malesuada, porttitor et ligula. Curabitur ultricies varius turpis sit amet tempor. Proin dapibus convallis sodales. Pellentesque augue arcu, consequat nec libero eu, consectetur tempor nibh. Nullam sodales nisi risus, nec tincidunt elit tempor quis. Proin est lacus, egestas et pharetra suscipit, egestas eu nulla.
Curabitur sed commodo sapien. Sed malesuada tristique sem, eget ullamcorper nibh. Phasellus purus sapien, lacinia sed bibendum nec, condimentum non velit. Nullam eu dapibus turpis. Duis interdum pharetra ex ut rhoncus. Donec augue neque, porta ut semper sed, vestibulum laoreet turpis. Mauris ligula libero, consectetur vitae lectus id, placerat rutrum odio. Sed at dui quis urna facilisis vestibulum. Nam hendrerit pellentesque lectus, ut ornare neque laoreet quis.
Vivamus elementum, libero a rutrum sagittis, turpis mauris faucibus felis, vitae commodo nulla ipsum pellentesque enim. Fusce sed mauris tempor, posuere nisl vel, ornare ipsum. Ut interdum orci diam, ac accumsan neque lobortis sed. Duis eu est odio. In at congue sapien. Cras dolor arcu, pharetra at ligula a, molestie gravida ante. Donec scelerisque augue lorem, vitae cursus libero laoreet sed. Praesent ultrices scelerisque pellentesque. Morbi turpis odio, dictum vel pretium ut, placerat id tellus. Cras convallis neque sed dui sodales, in sollicitudin risus gravida. Nam euismod in purus id fermentum. Sed sollicitudin turpis eget magna ullamcorper vestibulum. Nam non nisi porttitor massa vehicula semper vitae eu risus. Nulla tempus varius eros, at feugiat odio aliquam sit amet. Morbi nec efficitur felis. Nam at metus a est fermentum porttitor et a arcu.
        </p>
      </div>
    </div>
  );
}
 