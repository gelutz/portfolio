import Image from "next/image"

export const ContactCard = () => {
    return (
        <div className="flex border border-cinza rounded-xl p-4 gap-x-4">
            <div className="w-fit flex-initial flex flex-col items-center justify-center">
                <Image
                    className="rounded-full p-4 size-48 shadow-sm"
                    src="https://github.com/gelutz.png"
                    alt="Profile picture"
                    width={150}
                    height={150}
                    unoptimized
                />
                <p className="text-xs text-cinza-claro">Photo by: Pâmela Ritter ♥</p>
            </div>
            <div className="flex-1">
                <p>Gosto de consumir muito conteúdo da área, tanto por vídeo, artigo, blog ou redes sociais, e gosto de me manter atualizado sobre as novidades das minhas stacks.</p>
                <br />
                <p className="text-lg italic font-bold">
                    <a className="underline text-blue-300" href="https://www.psychologytoday.com/us/blog/how-to-be-brilliant/201206/the-protege-effect">&quot;The best way to learn is to teach&quot;</a>
                    <br />
                    <p className="text-sm pl-2">- Annie Murphy Paul</p>
                </p>

            </div>
            
        </div>
    )
}
