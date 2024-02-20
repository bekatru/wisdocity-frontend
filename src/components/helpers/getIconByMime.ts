import DocIcon from 'assets/png/doc.png';
import TxtIcon from 'assets/png/txt.png';
import PdfIcon from 'assets/png/pdf.png';
import Record from 'assets/png/record.png';
import VideoIcon from 'assets/png/video.png';

export function getIconByMime (mimeType: string) {
  switch (true) {
    case mimeType === "text/plain": return TxtIcon;
    case mimeType === "application/msword": return DocIcon;
    case mimeType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document": return DocIcon;
    case mimeType === "application/pdf": return PdfIcon;
    case mimeType.includes('audio/'): return Record;
    case mimeType.includes('video/'): return VideoIcon;
    default: return Record;
  }
}