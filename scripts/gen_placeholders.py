"""
One-off script used to generate placeholder imagery for the portfolio.
Not part of the app build — safe to delete once real assets are in place.
"""
import math
import random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "public" / "images"

BG = (11, 13, 16)
BG_ALT = (16, 19, 23)
CARD = (23, 27, 32)
BORDER = (42, 47, 54)
INK = (245, 245, 242)
INK_SEC = (180, 184, 191)
INK_MUTED = (128, 133, 143)

def font(size, bold=False):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for c in candidates:
        if Path(c).exists():
            return ImageFont.truetype(c, size)
    return ImageFont.load_default()

def add_grain(img, amount=8):
    px = img.load()
    w, h = img.size
    for _ in range(int(w * h * 0.02)):
        x, y = random.randint(0, w - 1), random.randint(0, h - 1)
        r, g, b = px[x, y][:3]
        d = random.randint(-amount, amount)
        px[x, y] = (max(0, min(255, r + d)), max(0, min(255, g + d)), max(0, min(255, b + d)))
    return img

def vignette(img, strength=0.35):
    w, h = img.size
    mask = Image.new("L", (w, h), 0)
    dm = ImageDraw.Draw(mask)
    dm.ellipse([-w * 0.2, -h * 0.25, w * 1.2, h * 1.25], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(w * 0.12))
    dark = Image.new("RGB", (w, h), BG)
    return Image.composite(img, dark, mask)

# ---------- Hero portrait placeholder ----------
def gen_hero():
    w, h = 1000, 1250
    img = Image.new("RGB", (w, h), CARD)
    d = ImageDraw.Draw(img)
    # subtle radial glow behind silhouette
    for i in range(220, 0, -1):
        t = i / 220
        col = tuple(int(BG_ALT[c] + (CARD[c] - BG_ALT[c]) * (1 - t)) for c in range(3))
        d.ellipse(
            [w / 2 - i * 2.4, h * 0.32 - i * 2.4, w / 2 + i * 2.4, h * 0.32 + i * 2.4],
            fill=col,
        )
    # minimal silhouette: head + shoulders
    d.ellipse([w * 0.36, h * 0.16, w * 0.64, h * 0.44], fill=BORDER)
    d.pieslice([w * 0.18, h * 0.42, w * 0.82, h * 1.15], 180, 360, fill=BORDER)
    img = img.filter(ImageFilter.GaussianBlur(1.2))
    img = add_grain(img, 6)
    d = ImageDraw.Draw(img)
    for y in range(0, h, 56):
        d.line([(0, y), (w, y)], fill=tuple(min(255, c + 3) for c in BG), width=1)
    d.text((40, h - 64), "PORTRAIT PLACEHOLDER — replace with hero.jpg", font=font(20), fill=INK_MUTED)
    img.save(IMG / "profile" / "hero.jpg", quality=88)

# ---------- Gallery reel images ----------
def gen_gallery():
    random.seed(42)
    w, h = 1200, 800
    palette = [CARD, BORDER, BG_ALT, (30, 34, 40), (20, 23, 27)]
    for i in range(1, 16):
        img = Image.new("RGB", (w, h), random.choice(palette))
        d = ImageDraw.Draw(img)
        style = i % 4
        if style == 0:
            # concentric arcs
            cx, cy = random.randint(0, w), random.randint(0, h)
            for r in range(40, 900, 46):
                d.ellipse([cx - r, cy - r, cx + r, cy + r], outline=BORDER, width=2)
        elif style == 1:
            # diagonal stripes
            for x in range(-h, w, 44):
                d.line([(x, 0), (x + h, h)], fill=BORDER, width=2)
        elif style == 2:
            # scattered dots
            for _ in range(140):
                x, y = random.randint(0, w), random.randint(0, h)
                r = random.randint(2, 5)
                d.ellipse([x - r, y - r, x + r, y + r], fill=random.choice([INK_MUTED, BORDER]))
        else:
            # grid blocks
            for gx in range(0, w, 80):
                for gy in range(0, h, 80):
                    if random.random() < 0.18:
                        d.rectangle([gx, gy, gx + 80, gy + 80], fill=BORDER)
        img = img.filter(ImageFilter.GaussianBlur(0.6))
        img = add_grain(img, 5)
        img = vignette(img, 0.25)
        d = ImageDraw.Draw(img)
        d.text((28, h - 44), f"GALLERY {i:02d}", font=font(18), fill=INK_MUTED)
        img.save(IMG / "gallery" / f"{i:02d}.jpg", quality=86)

# ---------- Project screenshots ----------
def gen_projects():
    projects = [
        ("quizem", "QuizEm"),
        ("educore", "EduCore"),
        ("pong", "Pong Game"),
        ("kraftkala", "KraftKala"),
        ("iscandid", "isCandid"),
    ]
    w, h = 1600, 1000
    for slug, name in projects:
        img = Image.new("RGB", (w, h), BG_ALT)
        d = ImageDraw.Draw(img)
        # browser chrome
        d.rectangle([0, 0, w, 64], fill=CARD)
        d.line([(0, 64), (w, 64)], fill=BORDER, width=2)
        for i, cx in enumerate([32, 64, 96]):
            d.ellipse([cx, 24, cx + 16, 40], fill=BORDER)
        d.rounded_rectangle([160, 18, w - 160, 46], radius=14, outline=BORDER, width=2)
        d.text((180, 24), f"{slug}.example.com", font=font(16), fill=INK_MUTED)
        # content area
        d.rectangle([0, 64, w, h], fill=BG_ALT)
        margin = 90
        d.rounded_rectangle([margin, 130, w - margin, 230], radius=10, outline=BORDER, width=2)
        d.text((margin + 24, 160), name, font=font(34, bold=True), fill=INK)
        cols = 3
        gap = 28
        card_w = (w - margin * 2 - gap * (cols - 1)) // cols
        for c in range(cols):
            x0 = margin + c * (card_w + gap)
            y0 = 270
            y1 = h - 90
            d.rounded_rectangle([x0, y0, x0 + card_w, y1], radius=12, fill=CARD, outline=BORDER, width=2)
            d.rectangle([x0 + 24, y0 + 24, x0 + card_w - 24, y0 + 130], fill=BORDER)
            for li, ly in enumerate(range(y0 + 160, y1 - 40, 34)):
                lw = card_w - 48 if li % 2 == 0 else card_w - 110
                d.rounded_rectangle([x0 + 24, ly, x0 + 24 + lw, ly + 14], radius=6, fill=BORDER)
        img = add_grain(img, 4)
        img.save(IMG / "projects" / f"{slug}.png")

# ---------- Education badges ----------
def gen_education():
    badges = [
        ("stagnes", "SA"),
        ("bnr", "BC"),
        ("liet", "LT"),
    ]
    size = 400
    for slug, initials in badges:
        img = Image.new("RGB", (size, size), (0, 0, 0, 0)).convert("RGB")
        img = Image.new("RGB", (size, size), CARD)
        d = ImageDraw.Draw(img)
        d.ellipse([20, 20, size - 20, size - 20], outline=BORDER, width=2)
        d.ellipse([48, 48, size - 48, size - 48], fill=BG_ALT)
        f = font(96, bold=True)
        bbox = d.textbbox((0, 0), initials, font=f)
        tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
        d.text(((size - tw) / 2 - bbox[0], (size - th) / 2 - bbox[1]), initials, font=f, fill=INK_SEC)
        img.save(IMG / "education" / f"{slug}.png")

# ---------- Favicon ----------
def gen_favicon():
    size = 64
    img = Image.new("RGB", (size, size), BG)
    d = ImageDraw.Draw(img)
    d.rounded_rectangle([6, 6, size - 6, size - 6], radius=14, outline=INK, width=4)
    f = font(28, bold=True)
    text = "D"
    bbox = d.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    d.text(((size - tw) / 2 - bbox[0], (size - th) / 2 - bbox[1]), text, font=f, fill=INK)
    img.save(ROOT / "app" / "favicon.ico", format="ICO", sizes=[(64, 64), (32, 32), (16, 16)])

if __name__ == "__main__":
    gen_hero()
    gen_gallery()
    gen_projects()
    gen_education()
    gen_favicon()
    print("done")
