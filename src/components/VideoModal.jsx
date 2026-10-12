import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { storyVideo } from '../data/content.js'

function parseVideo(url) {
  if (!url) return { type: 'none' }
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/)
  if (yt) return { type: 'iframe', src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1` }
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vimeo) return { type: 'iframe', src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` }
  return { type: 'file', src: url }
}

export default function VideoModal({ open, onClose }) {
  const [failed, setFailed] = useState(false)
  const video = parseVideo(storyVideo)

  useEffect(() => {
    if (!open) return undefined
    setFailed(false)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/90 p-4 backdrop-blur-md sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Our story video"
        >
          <motion.div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-[0_30px_100px_-20px_rgba(0,0,0,.8)]"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {video.type === 'iframe' && (
              <iframe
                src={video.src}
                title="Regal Castle — our story"
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
              />
            )}
            {video.type === 'file' && !failed && (
              <video src={video.src} className="h-full w-full" controls autoPlay playsInline onError={() => setFailed(true)} />
            )}
            {(video.type === 'none' || failed) && (
              <div className="grid h-full w-full place-items-center p-8 text-center text-sm text-white/70">
                Add your story video: put an .mp4 at <code className="mx-1 text-gold-text">public/videos/story.mp4</code> or set a YouTube / Vimeo link in{' '}
                <code className="mx-1 text-gold-text">src/data/content.js</code>.
              </div>
            )}
          </motion.div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-forest sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
