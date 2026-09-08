from pathlib import Path

page = Path('app/[locale]/soluciones/page.tsx')
text = page.read_text()
old = '''            <img
              src="/images/solutions/hero-system.webp"
              width="1600"
              height="900"
              loading="eager"
              fetchPriority="high"
              alt=""
              aria-hidden="true"
              className={styles.heroVisualSvg}
            />'''
new = '''            <img
              src="/images/solutions/hero-system.webp"
              width="1600"
              height="900"
              loading="eager"
              fetchPriority="high"
              alt=""
              aria-hidden="true"
              className={styles.heroVisualSvg}
            />
            <div className={styles.heroCubeLayer} aria-hidden="true">
              <span className={`${styles.heroCubeHotspot} ${styles.heroCubeHotspotA}`} />
              <span className={`${styles.heroCubeHotspot} ${styles.heroCubeHotspotB}`} />
              <span className={`${styles.heroCubeHotspot} ${styles.heroCubeHotspotC}`} />
              <span className={`${styles.heroCubeHotspot} ${styles.heroCubeHotspotD}`} />
              <span className={`${styles.heroCubeHotspot} ${styles.heroCubeHotspotE}`} />
            </div>'''
if old not in text:
    raise SystemExit('hero image block not found')
page.write_text(text.replace(old, new, 1))

css = Path('app/[locale]/soluciones/solutions-mockup.module.css')
c = css.read_text()
anchor = '.heroVisualSvg{position:relative;z-index:1;display:block;width:min(100%,650px);height:auto;object-fit:contain;object-position:center right;filter:brightness(.92) saturate(.86);mix-blend-mode:normal}'
addition = '''\n.heroCubeLayer{position:absolute;z-index:2;inset:0;pointer-events:none}\n.heroCubeHotspot{position:absolute;display:block;width:14%;aspect-ratio:1;border-radius:50%;pointer-events:auto;cursor:crosshair;opacity:.001;transform:translate(-50%,-50%) scale(.82);background:radial-gradient(circle,rgba(121,255,248,.48) 0,rgba(69,209,207,.22) 24%,rgba(69,209,207,.08) 45%,transparent 72%);filter:blur(1px);transition:opacity .22s ease,transform .26s ease,filter .26s ease}\n.heroCubeHotspot:after{content:"";position:absolute;inset:28%;border:1px solid rgba(168,217,216,.8);box-shadow:0 0 10px rgba(69,209,207,.58),0 0 24px rgba(69,209,207,.28);opacity:0;transform:rotate(45deg) scale(.72);transition:opacity .2s ease,transform .26s ease}\n.heroCubeHotspot:hover{opacity:.82;transform:translate(-50%,-50%) scale(1.08);filter:blur(0)}\n.heroCubeHotspot:hover:after{opacity:.92;transform:rotate(45deg) scale(1)}\n.heroCubeHotspotA{left:72%;top:31%;width:12%}.heroCubeHotspotB{left:84%;top:42%;width:10%}.heroCubeHotspotC{left:64%;top:53%;width:13%}.heroCubeHotspotD{left:77%;top:65%;width:9%}.heroCubeHotspotE{left:90%;top:59%;width:7%}\n@media (prefers-reduced-motion:reduce){.heroCubeHotspot,.heroCubeHotspot:after{transition:none}}\n@media (max-width:900px){.heroCubeHotspot{width:16%}.heroCubeHotspotE{display:none}}\n'''
if anchor not in c:
    raise SystemExit('hero visual css anchor not found')
css.write_text(c.replace(anchor, anchor + addition, 1))
