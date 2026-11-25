import Image from "next/image";
import Header from "@/components/Header";
import AdmissionForm from "@/components/AdmissionForm";
import PexelsImg from "@/components/PexelsImg";
import { SCHOOL, waLink } from "@/lib/config";

const APPROACH = [
  ["Reading first", "Fluent reading and clear writing in Hindi and English, built from the earliest classes."],
  ["Maths that makes sense", "Children understand why an answer works, using objects, patterns and everyday examples."],
  ["Curious about the world", "Environment studies through observation, questions and simple hands-on projects."],
  ["Good habits", "Respect, honesty, punctuality and teamwork, practised daily in small ways."],
];

const DAY = [
  ["Morning", "Prayer, assembly and thought of the day"],
  ["Mid-day", "Core lessons in languages, maths and environment studies"],
  ["Break", "Lunch and outdoor play"],
  ["Afternoon", "Art, music, sports and guided practice"],
];

const GALLERY = [
  [35107566, "Joy in every day", "Three schoolchildren in uniform jumping joyfully in a green garden", "(min-width:900px) 760px, 92vw", 1400, 933],
  [8926544, "Ready to learn", "Two children in school uniform holding books in a classroom", "(min-width:900px) 370px, 92vw", 1000, 750],
  [10646615, "Teamwork", "Girls in school uniform stacking hands together as a team", "(min-width:900px) 370px, 92vw", 1000, 750],
  [35128445, "Play & movement", "Children in uniform enjoying playground equipment on a sunny day", "(min-width:900px) 370px, 92vw", 1000, 750],
  [11273200, "In the classroom", "Happy schoolchildren in uniform in their classroom", "(min-width:900px) 370px, 92vw", 1000, 750],
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Hero: the school's own photo as background */}
        <section className="hero" style={{ padding: 0 }}>
          <Image
            className="hero-bg"
            src="/school.jpg"
            alt="M.S. Public School building and entrance with colourful children’s murals"
            fill
            priority
            sizes="100vw"
          />
          <div className="w">
            <span className="lab">Primary School · Shivpur, Varanasi</span>
            <h1>Small classes. <em>Big</em> beginnings.</h1>
            <p>
              A primary school where every child is known by name, taught with patience and encouraged to ask why.
              We build the reading, thinking and character that carry children through every year of school after this one.
            </p>
            <div className="btns">
              <a className="btn" href="#admission">Apply for admission</a>
              <a className="lnk" href="#contact">Plan a visit</a>
            </div>
          </div>
          <div className="tag"><b>Nursery to Class 5</b>Hindi &amp; English learning</div>
        </section>

        <div className="w">
          <div className="facts">
            <div><b>Primary years</b>Nursery through Class 5</div>
            <div><b>Two languages</b>Hindi and English</div>
            <div><b>Close to families</b>Regular parent conversations</div>
            <div><b>Shivpur, Varanasi</b>Near Mahadev Gas Agency</div>
          </div>
        </div>

        <section id="about">
          <div className="w split">
            <div>
              <span className="lab">About</span>
              <h2>A school that feels like part of the neighbourhood.</h2>
              <p className="big" style={{ marginTop: 22 }}>Good teachers, calm classrooms and honest conversations with parents.</p>
              <p className="mute" style={{ marginTop: 18 }}>
                M.S. Public School is a primary school in Shivpur, Varanasi. We focus on the first years of schooling,
                when children decide whether they enjoy learning. We pay attention to each child’s pace, so nobody is
                rushed and nobody is left behind.
              </p>
            </div>
            <div className="duo">
              <PexelsImg id={10638092} sizes="(max-width:820px) 45vw, 280px" width={1000} height={1333} alt="Happy group of students in uniform standing together in a classroom" />
              <PexelsImg id={10646602} sizes="(max-width:820px) 45vw, 280px" width={1000} height={1333} alt="Cheerful schoolgirls in uniform standing together in a school corridor" />
            </div>
          </div>
        </section>

        <section id="approach" className="dark">
          <div className="w">
            <span className="lab">Approach</span>
            <h2 style={{ maxWidth: "18ch" }}>Four things we get right.</h2>
            <div className="cols">
              {APPROACH.map(([t, d]) => (
                <div key={t}><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="life">
          <div className="w">
            <span className="lab">Life at school</span>
            <h2 style={{ maxWidth: "16ch" }}>Where every day has a little joy in it.</h2>
            <div className="gal">
              {GALLERY.map(([id, cap, alt, sizes, w, h]) => (
                <figure key={id}>
                  <PexelsImg id={id} alt={alt} sizes={sizes} width={w} height={h} />
                  <figcaption>{cap}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="band">
          <PexelsImg id={10638233} sizes="100vw" width={1800} height={1200} alt="Two schoolgirls in uniform enjoying time together in a classroom" />
          <div className="w">
            <h2>Every child, known by name.</h2>
            <p>When children feel seen, they feel safe enough to try, to ask and to grow. That is where good learning begins.</p>
          </div>
        </section>

        <section>
          <div className="w split" style={{ alignItems: "start" }}>
            <div>
              <span className="lab">A typical day</span>
              <h2>A steady, balanced rhythm.</h2>
              <p className="mute" style={{ marginTop: 14 }}>A sample routine. Please confirm exact timings with the school office.</p>
            </div>
            <div className="time">
              {DAY.map(([t, d]) => (
                <div key={t}><b>{t}</b><span>{d}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section id="admission" className="adm">
          <div className="w split" style={{ alignItems: "start" }}>
            <div>
              <span className="lab">Admissions</span>
              <h2>Start the conversation.</h2>
              <p className="mute" style={{ marginTop: 16, maxWidth: "36ch" }}>
                Tell us about your child. Your message opens in WhatsApp so the school can reply directly and arrange a visit.
              </p>
            </div>
            <AdmissionForm />
          </div>
        </section>

        <section id="contact">
          <div className="w split" style={{ alignItems: "start" }}>
            <div>
              <span className="lab">Contact</span>
              <h2>Come and see the school.</h2>
            </div>
            <div>
              <p className="big" style={{ maxWidth: "26ch" }}>{SCHOOL.address}</p>
              <p style={{ marginTop: 20 }}>
                <a className="lnk" href={SCHOOL.mapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps →</a>
              </p>
              <p className="mute" style={{ marginTop: 20 }}>
                Phone: <a href={`tel:+${SCHOOL.whatsapp}`}>{SCHOOL.phoneDisplay}</a>
                <br />
                Office hours: {SCHOOL.hours}
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="w">
          <span className="brand">{SCHOOL.name}</span>
          Primary school in Shivpur, Varanasi · © 2026 · Photos: <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a> · <a href="#top">Back to top</a>
        </div>
      </footer>

      <a className="fab" href={waLink("Hello, I would like to know more about M.S. Public School.")} target="_blank" rel="noopener noreferrer">
        WhatsApp us
      </a>
    </>
  );
}
