import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "../ui/dialog";
import { DialogHeader } from "../ui/dialog";

export const Image = ({ alt, src, ...props }) => {
  const emptyAlt = ['alt text', '', 'image']
  const altIsEmpty = emptyAlt.includes(alt)
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="inline-block mr-6">
          <img alt={alt ?? 'alt'} className="rounded-lg mb-0 max-h-[400px]" {...props} src={src.replace('../public/', '/')} />
          {!altIsEmpty && <span className='mt-0 italic text-muted-foreground'>▲ {alt}</span>}
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-[85vw] w-[max-content]">
        <DialogHeader>
          <DialogTitle>{altIsEmpty ? '' : alt}</DialogTitle>
          <DialogDescription> </DialogDescription>
        </DialogHeader>
        <div className="max-h-[85vh] overflow-auto w-fit">
          <img alt={alt ?? 'alt'} className="rounded-lg mb-0" {...props} src={src.replace('../public/', '/')} />
        </div>
      </DialogContent>
    </Dialog>
  )
}