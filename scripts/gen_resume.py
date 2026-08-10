from pathlib import Path
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.pdfgen import canvas

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "resume.pdf"

INK = HexColor("#111214")
MUTED = HexColor("#6b6f76")
LINE = HexColor("#d8dadd")

def build():
    c = canvas.Canvas(str(OUT), pagesize=LETTER)
    w, h = LETTER

    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 26)
    c.drawString(0.9 * inch, h - 1.1 * inch, "Divya Sree")

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 12)
    c.drawString(0.9 * inch, h - 1.4 * inch, "Software Engineer")
    c.drawString(0.9 * inch, h - 1.6 * inch, "hello@divyasree.dev  |  Vijayawada, Andhra Pradesh, India")

    c.setStrokeColor(LINE)
    c.setLineWidth(1)
    c.line(0.9 * inch, h - 1.8 * inch, w - 0.9 * inch, h - 1.8 * inch)

    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 14)
    c.drawString(0.9 * inch, h - 2.3 * inch, "This is a placeholder resume")

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 11)
    lines = [
        "Replace public/resume.pdf with your real, up-to-date resume file —",
        "the filename and path are already wired into the Navbar, Contact",
        "section, and the download attribute, so no code changes are needed.",
    ]
    y = h - 2.65 * inch
    for line in lines:
        c.drawString(0.9 * inch, y, line)
        y -= 0.24 * inch

    c.showPage()
    c.save()

if __name__ == "__main__":
    build()
    print("resume.pdf written:", OUT.stat().st_size, "bytes")
