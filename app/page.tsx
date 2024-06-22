"use client";
import styles from "./page.module.css";
import {
  FaGithub,
  FaGraduationCap,
  FaLaptop,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  RiFlutterFill,
  RiFlutterLine,
  RiOpenaiLine,
  RiSupabaseLine,
} from "react-icons/ri";
import { FiPenTool } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { PiStripeLogo } from "react-icons/pi";
import { TfiUser } from "react-icons/tfi";
import {
  IoBookOutline,
  IoCodeSlash,
  IoListOutline,
  IoLogoFirebase,
  IoPersonOutline,
  IoSchoolOutline,
  IoStarOutline,
  IoMailOutline,
} from "react-icons/io5";
import { IoDownloadOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { TbBrandMongodb } from "react-icons/tb";
import { DiFirebase } from "react-icons/di";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaBook, FaBookBookmark, FaLinesLeaning } from "react-icons/fa6";
export default function Home() {
  return (
    <main className={styles.main}>
      <a href="mailto:reeduhlik@gmail.com" className={styles.emailcontainer}>
        <p>Contact Me</p>
        <IoMailOutline className={styles.email} />
      </a>
      <div className={styles.container}>
        <div
          className={styles.scrollindicatorbarhorizontal}
          style={{
            transformOrigin: "left",
            left: "0px",
            top: "10vh",
          }}></div>
        <div
          className={styles.scrollindicatorbarhorizontal}
          style={{
            transformOrigin: "right",
            right: "0px",
            top: "15vh",
          }}></div>
        <div className={styles.text}>
          <h1 className={styles.name}>Reed Uhlik</h1>
          <h5 className={styles.subtitle}>
            <span className={styles.subsection}>
              I’m a senior at Georgetown University studying Computer Science,
              Economics, and Mathematics.
            </span>{" "}
            <span className={styles.subsection2}>
              I'm driven by my endless curiosity, love for learning, and passion
              for coding.
            </span>{" "}
            <span className={styles.subsection3}>
              In my free time, I build apps for my friends and family to use.
            </span>
          </h5>
          <div className={styles.socials}>
            <a
              href="
              https://github.com/reeduhlik"
              target="_blank">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/reeduhlik" target="_blank">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div
          className={styles.scrollindicatorbar}
          style={{
            transformOrigin: "top",
            top: "0px",
          }}></div>
        <div
          className={styles.scrollindicatorbar}
          style={{
            transformOrigin: "bottom",
            bottom: "0px",
            right: "5vw",
          }}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.projects}>
          <div className={styles.projectsheader}>
            <FaLaptop />
            <h5>Featured Projects</h5>
          </div>
          <h2 className={styles.headerorange}>
            Some of my favorite things I've built
          </h2>
          <h4
            className={styles.projectsubtitle}
            style={{
              marginBottom: "100px",
            }}>
            My apps are used by thousands of students, friends, and
            professionals.
          </h4>
          <div className={styles.featured}>
            <div className={styles.featuredleft}>
              <div className={`${styles.featuredcard} ${styles.slideinleft}`}>
                <div className={styles.featuredcardbar}>
                  <div className={styles.featuredcardbarleft}>
                    <FaReact />
                    <FaPython />
                  </div>
                  <h4
                    style={{
                      color: "var(--primary-blue)",
                    }}>
                    Featured Project
                  </h4>
                </div>
                <img src="/hoyacourses.png" alt="Hoya Courses" />
                <h3>Hoya Courses</h3>
                <p>
                  After struggling to effectively plan for course registration
                  every semester, I set out to create a better solution for
                  Georgetown students to use. Hoya Courses is an online platform
                  by thousands of Georgetown students every semester to
                  seamlessly find classes and professors that fit their needs.
                </p>
                <div className={styles.buttons}>
                  <a
                    href="https://github.com/reeduhlik/hoya-courses"
                    className="button"
                    target="_blank"
                    style={{
                      backgroundColor: "var(--primary-blue)",
                    }}>
                    View Code
                  </a>
                  <a
                    href="https://hoyacourses.com"
                    className="button"
                    style={{
                      border: "1px solid var(--primary-blue)",
                      color: "var(--primary-blue)",
                    }}>
                    View Site
                  </a>
                </div>
              </div>
              <div className={`${styles.featuredcard} ${styles.slideinup}`}>
                <div className={styles.featuredcardbar}>
                  <div className={styles.featuredcardbarleft}>
                    <RiFlutterFill />
                    <IoLogoFirebase />
                  </div>
                  <h4
                    style={{
                      color: "var(--primary-green)",
                    }}>
                    Featured Project
                  </h4>
                </div>
                <img src="/foodme.png" alt="FoodMe" />
                <h3>FoodMe</h3>
                <p>
                  Selected as one of the top 3 solutions nationally as part of
                  the Google Student Developer Challenge.
                </p>
                <div className={styles.buttons}>
                  <a
                    href="https://www.youtube.com/watch?v=-rgiAKuSCuY&ab_channel=MattJordan"
                    target="_blank"
                    className="button"
                    style={{
                      backgroundColor: "var(--primary-green)",
                    }}>
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.featuredright}>
              <div className={`${styles.featuredcard} ${styles.slideindown}`}>
                <div className={styles.featuredcardbar}>
                  <div className={styles.featuredcardbarleft}>
                    <TbBrandNextjs />
                    <RiSupabaseLine />
                    <PiStripeLogo />
                  </div>
                  <h4
                    style={{
                      color: "var(--naimun-blue)",
                    }}>
                    Featured Project
                  </h4>
                </div>
                <img
                  src="/projects/naimun.png"
                  alt="Naimun Project"
                  style={{
                    width: "70%",
                  }}
                />
                <h3>NAIMUN Registration</h3>
                <p>
                  Built to accomodate the largest student-run Model UN
                  conference in the nation, NAIMUN Reg is a fully-fledged
                  platform with integrated authentication, emails, Stripe
                  payment, and messaging. The platform was designed from scratch
                  to create a seamless user experience for over 3,000 delegates.
                </p>
                <div className={styles.buttons}>
                  <a
                    href="#"
                    className="button"
                    style={{
                      backgroundColor: "var(--naimun-blue)",
                    }}>
                    View Site
                  </a>
                  <a
                    href="#"
                    className="button"
                    style={{
                      border: "1px solid var(--naimun-blue)",
                      color: "var(--naimun-blue)",
                    }}>
                    Watch Demo
                  </a>
                </div>
              </div>
              <div className={`${styles.featuredcard} ${styles.slideinright}`}>
                <div className={styles.featuredcardbar}>
                  <div className={styles.featuredcardbarleft}>
                    <TbBrandNextjs />
                    <RiSupabaseLine />
                    <FaPython />
                    <RiOpenaiLine />
                  </div>
                  <h4
                    style={{
                      color: "var(--filedai-purple)",
                    }}>
                    Featured Project
                  </h4>
                </div>
                <div className={styles.featuredfiledai}>
                  <img
                    src="/projects/filedai.png"
                    alt="Naimun Project"
                    style={{
                      width: "50%",
                      marginLeft: "20px",
                    }}
                  />
                  <div>
                    <h3>Filed.AI</h3>
                    <p>
                      FiledAI uses Tessarct OCR and GPT to auto-fill any PDF
                      form. The platform is designed to integrate directly with
                      existing EHR systems for doctors to use with
                      patient-submitted forms. Runner-up solution in the 2024
                      H2AI Hackathon.
                    </p>
                    <div className={styles.buttons}>
                      <a
                        href="#"
                        className="button"
                        style={{
                          backgroundColor: "var(--filedai-purple)",
                        }}>
                        View Code
                      </a>
                      <a
                        href="#"
                        className="button"
                        style={{
                          border: "1px solid var(--filedai-purple)",
                          color: "var(--filedai-purple)",
                        }}>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.devheader}>
            <IoCodeSlash />
            <h5>Dev Portfolio</h5>
          </div>
          <h2 className={styles.headerblue}>I use coding to solve problems.</h2>

          <h4 className={styles.projectsubtitle}>
            I create solutions to inefficiencies I find around me.
          </h4>
          <div className={styles.projectgrid}>
            <div className={styles.griditem}>
              <img src="/projects/hoyalytics.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>Hoyalytics</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>React</p>
                <p>NodeJS</p>
                <p>Google Sheets API</p>
              </div>
              <p>
                A custom-designed club website for Hoyalytics Data Consulting.
                Integrates with the Google Sheets API to allow for custom
                waitlist sign-up functionality.
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://hoyalytics.com"
                  target="_blank"
                  className="button"
                  style={{
                    backgroundColor: "var(--hoyalytics-blue)",
                  }}>
                  View Site
                </a>
              </div>
            </div>
            <div className={styles.griditem}>
              <img src="/projects/hoyahelper.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>Hoya Helper</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>NextJS</p>
                <p>Azure</p>
                <p>BeautifulSoup (Python)</p>
              </div>
              <p>
                The winning solution of HoyaHacks 2024, Hoya Helper is an AI
                chatbot designed to help prospective Georgetown students through
                the admissions process. Alongside 3 other Georgetown students,
                we utilize Azure Search to implement RAG with a GPT model,
                wrapped in a custom-branded user interface.
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://www.youtube.com/watch?v=jnj_o9nYcJQ&ab_channel=ReedUhlik"
                  target="_blank"
                  className="button"
                  style={{
                    backgroundColor: "var(--hoyahelper-blue)",
                  }}>
                  Watch Video
                </a>
                <a
                  href="https://www.prnewswire.com/news-releases/cloudforce-announces-winners-in-10th-annual-hoya-hacks-hackathon-302046513.html"
                  target="_blank"
                  className="button"
                  style={{
                    border: "1px solid var(--hoyahelper-blue)",
                    color: "var(--hoyahelper-blue)",
                  }}>
                  Read More
                </a>
              </div>
            </div>
            <div className={styles.griditem}>
              <img src="/projects/neurodd.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>Neurodd</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>Python</p>
                <p>Tensorflow</p>
                <p>SKLearn</p>
              </div>
              <p>
                A collection of deep learning models designed to predict the
                outcome of NFL games. Hundreds of features of historical game
                data are aggregated to train the models.
              </p>{" "}
            </div>
            <div className={styles.griditem}>
              <img src="/projects/developers.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>Hoya Developers</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>React</p>
                <p>Google Sheets API</p>
              </div>
              <p>
                As the founder and CEO of Georgetown's premier software
                development club, I built our club's website to recruit new
                developers, showcase our projects, and provide resources for our
                members.
              </p>
              <div className={styles.buttons}>
                <a
                  href="#"
                  className="button"
                  style={{
                    backgroundColor: "var(--hoya-devs-purple)",
                  }}>
                  Visit Site
                </a>
              </div>
            </div>
            <div className={styles.griditem}>
              <img src="/projects/basha-swim.png" alt="Basha Swim" />
              <div className={styles.projectheader}>
                <h3>Basha Swim & Dive</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>React</p>
                <p>NodeJS</p>
                <p>Express</p>
                <p>MongoDB</p>
                <p>Twilio</p>
              </div>
              <p>
                A swim club management site that allows coaches to enter meet
                line-ups, track results, and communicate with their athletes.
                Built for my alma mater, Basha High School.
              </p>
            </div>
            <div className={styles.griditem}>
              <img src="/projects/fpo.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>Football Pool Organizer</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>PHP</p>
                <p>MySQL</p>
                <p>Javascript</p>
              </div>
              <p>
                A content management system designed for football fans to select
                winners of weekly games. Features include user authentication,
                custom scoring, and automated standings.
              </p>
              <div className={styles.buttons}>
                <a
                  href="#"
                  className="button"
                  style={{
                    backgroundColor: "var(--fpo-blue)",
                  }}>
                  Visit Site
                </a>
              </div>
            </div>
            <div className={styles.griditem}>
              <img src="/projects/bracket.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>March Madness Bracket Challenge</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>PHP</p>
                <p>MySQL</p>
              </div>
              <p>
                A platform that allows for office bracket tournaments to
                customize scoring rules, automatically score brackets, and track
                standings in real-time.
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://marchmadnesspool.org"
                  className="button"
                  style={{
                    backgroundColor: "var(--hoya-devs-purple)",
                  }}>
                  Visit Site
                </a>
              </div>
            </div>
            <div className={styles.griditem}>
              <img src="/projects/numbr.png" alt="Hoya Courses" />
              <div className={styles.projectheader}>
                <h3>Numbr</h3>
              </div>
              <div className={styles.projectlabels}>
                <p>React</p>
                <p>NodeJS</p>
                <p>Socket.io</p>
              </div>
              <p>
                A live, multiplayer strategy game utilizing web socket
                technology.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.designheader}>
          <FiPenTool />
          <h5>Design Portfolio</h5>
        </div>
        <h2 className={styles.headergreen}>
          I also design stunning user interfaces.
        </h2>
        <h4 className={styles.projectsubtitle}>
          I believe that great software should be beautiful, simple, and easy to
          use.
        </h4>
        <div className={styles.designgrid}>
          <div className={styles.designgriditem}>
            <img src="/projects/reservable.png" alt="Portfolio Image" />
            <div>
              <h3>Reservable</h3>
              <p>Online booking system for apartment gym reservations</p>
            </div>
          </div>
          <div className={styles.designgriditem}>
            <img src="/projects/ui-rainyday.jpg" alt="Portfolio Image" />
            <div>
              <h3>Rainyday</h3>
              <p>Cash-back rewards program for college students</p>
            </div>
          </div>
          <div className={styles.designgriditem}>
            <img src="/projects/ui-numbr.jpg" alt="Portfolio Image" />
            <div>
              <h3>Numbr</h3>
              <p>Live, multiplayer strategy game</p>
            </div>
          </div>
          <div className={styles.designgriditem}>
            <img src="/projects/ui-taskflow.jpg" alt="Portfolio Image" />
            <div>
              <h3>Taskflow</h3>
              <p>Have AI focus for you</p>
            </div>
          </div>
          <div className={styles.designgriditem}>
            <img src="/projects/ui-marchmadness.jpg" alt="Portfolio Image" />
            <div>
              <h3>March Madness</h3>
              <p>Bracket creation and management platform</p>
            </div>
          </div>
          <div className={styles.designgriditem}>
            <img src="/projects/ui-chop.jpg" alt="Portfolio Image" />
            <div>
              <h3>Chop Steakhouse</h3>
              <p>Elegant local restaurant</p>
            </div>
          </div>
          <div className={styles.designgriditem}>
            <img src="/projects/ui-assassins.jpg" alt="Portfolio Image" />
            <div>
              <h3>Assassins</h3>
              <p>Platform for popular high school game</p>
            </div>
          </div>
        </div>
        <div className={styles.devheader}>
          <FaGraduationCap />
          <h5>Course Portfolio</h5>
        </div>
        <h2 className={styles.headerblue}>A look at my academic journey.</h2>
        <div className={styles.courseGrid}>
          <div className={styles.courseCol}>
            <h3>Computer Science</h3>
            <p>Computer Science I</p>
            <p>Computer Science II</p>
            <p>Data Structures</p>
            <p>Computational Structures</p>
            <p>Advanced Programming</p>
            <p>Algorithms</p>
            <p>Systems Design</p>
            <p>Operating Systems</p>
            <p>Network Security</p>
            <p>Databases*</p>
            <p>Information Assurance*</p>
          </div>
          <div className={styles.courseCol}>
            <h3>Economics</h3>
            <p>Intro Microeconomics</p>
            <p>Intro Macroeconomics</p>
            <p>Intermediate Microeconomics</p>
            <p>Intermediate Macroeconomics</p>
            <p>Econometrics</p>
            <p>Economics of Information</p>
            <p>Economics of Sports</p>
            <p>Time Series Econometrics</p>
            <p>International Economics*</p>
          </div>
          <div className={styles.courseCol}>
            <h3>Mathematics</h3>
            <p>Calculus I</p>
            <p>Calculus II</p>
            <p>Calculus III</p>
            <p>Math Methods</p>
            <p>Linear Algebra</p>
            <p>Math Statistics</p>
          </div>
        </div>
        <p
          style={{
            color: "#888",
            marginTop: "0px",
            fontSize: "14px",
            marginBottom: "100px",
          }}>
          I've earned an A in every course in taken in my discipline. *
          indicates courses I'm taking Fall 2024.
        </p>
        <div
          className={styles.designheader}
          style={{
            color: "var(--primary-orange)",
          }}>
          <FaLinesLeaning />
          <h5>Other Works</h5>
        </div>
        <h2 className={styles.headerorange} style={{}}>
          Other academic projects I've worked on.
        </h2>
        <div className={styles.othergrid}>
          <div className={styles.othergriditem}>
            <img src="/projects/econpaper.png" alt="Portfolio Image" />
            <div>
              <h3>
                How Legalizing Sports Betting Has Made NFL Officiating
                Less Corrupt
              </h3>
              <p>
                Originally submitted as my term paper for "Economics of Sports,"
                I analyzed how NFL betting outcomes how been impacted by the
                legalization of sports gambling. To complete the project, I
                aggregated historical betting data and game outcomes and
                performed various statistical tests, including regressions,
                independence tests, and Wald-Wolfowitz runs tests.
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://medium.com/@reeduhlik/how-legalizing-sports-betting-has-made-nfl-officiating-less-corrupt-b25542f30c7a"
                  target="_blank"
                  className="button"
                  style={{
                    backgroundColor: "#eee",
                  }}>
                  Read Paper
                </a>
              </div>
            </div>
          </div>
          <div className={styles.othergriditem}>
            <img src="/projects/devsbootcamp.png" alt="Portfolio Image" />
            <div>
              <h3>Software Engineering Bootcamp</h3>
              <p>
                First launched in Spring 2024, I co-created an taught an
                in-person, 12-week software engineering bootcamp for Georgetown
                students. The course was designed to teach students the
                fundamentals of software development, including Git, React,
                NodeJS, and MongoDB. A majority of the course was recorded and
                is available on YouTube.
              </p>
              <div className={styles.buttons}>
                <a
                  href="https://www.youtube.com/channel/UCunwRSVFnbJ70hbvuqBAtPQ"
                  target="_blank"
                  className="button"
                  style={{
                    backgroundColor: "#eee",
                  }}>
                  View Course
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={styles.designheader}
          style={{
            color: "var(--primary-green)",
          }}>
          <FaBookBookmark />
          <h5>My Story</h5>
        </div>
        <h2
          className={styles.headergreen}
          style={{
            marginBottom: "50px",
          }}>
          Read about my interest in technology
        </h2>
        <p className={styles.storyparagraph}>
          <span
            style={{
              fontSize: "48px",
            }}>
            M
          </span>
          y stomach was pitted with a blend of anxiety and excitement as I
          walked towards the front of my second grade classroom. I turned around
          and scanned the faces of my confused classmates, whispering amongst
          themselves about the apparent absence of a tacky tri-fold poster
          board. It was at this moment that I allowed a smile to slowly spread
          across my face. I proudly removed a two gigabyte USB flash drive from
          my pocket and showcased the red, thumb-sized device that held my
          project- a slideshow created in Microsoft PowerPoint 2003. Weeks
          prior, after watching my dad use this seemingly magical program for
          work, I became determined to master it myself.
        </p>
        <p className={styles.storyparagraph}>
          In an age where technology is becoming more mainstream than ever,
          where Kindergarteners are subjected to six hours of screen time each
          day for virtual learning, where it is no longer uncommon for 2nd
          graders to yield the newest model iPhone, and where a two gigabyte USB
          drive is now obsolete, a simple slide deck may no longer be
          state-of-the-art technology. Ten years ago, however, an unforgettable
          look of awe quickly spread throughout the classroom as I delivered my
          presentation on the assigned Red-Eared Slider Turtle. Little did I
          appreciate the irony of how a presentation on a slow-moving, ancient
          reptile would ignite my interest in the fast-paced, rapidly evolving
          technology industry.
        </p>
        <p className={styles.storyparagraph}>
          My love for computers narrowed more specifically to a passion for web
          development in sixth grade. While my technology teacher had introduced
          me to Scratch, a block-based coding platform, I knew that this fun way
          to teach kids the basics of coding was not what was used in the “real
          world.” My ambitious, sponge-like brain wanted to learn how to make
          real websites. A simple Google search of “How are websites made?” led
          me to W3schools, a platform with countless hours of programming
          tutorials and examples. I dedicated myself to learning web development
          line by line, one language at a time. I used the coins in my piggy
          bank to buy additional coding courses, starting with the basics of
          HTML and CSS, and eventually progressing into the more advanced
          JavaScript and PHP.
        </p>
        <p className={styles.storyparagraph}>
          The first website I ever built was a simple to-do list application.
          Modest by any standards, the basic functionality behind my project
          paled in comparison to the sense of accomplishment I achieved from
          finally getting my program to work. The same feeling I had experienced
          years prior in seeing Powerpoint for the first time resurfaced after
          watching the hours I had spent teaching myself how to code culminate
          into a finished website.
        </p>
        <p className={styles.storyparagraph}>
          After several years of writing thousands of lines of code, late-nights
          and early mornings spent debugging my programs, and dreams filled with
          new ideas swirling around my head, web development has grown from a
          small hobby into an integral piece of who I am. But what,
          specifically, is so enjoyable about it to me? Maybe it’s my ability to
          solve real-world problems in a unique way. Maybe it’s the way I can
          express my creativity with a monitor and keyboard rather than a canvas
          and paintbrush. Maybe it’s the endless and exhilarating rollercoaster
          of emotions I experience after finally solving a problem only to
          discover another bug that needs to be fixed. Maybe it's the journey of
          taking an idea and transforming it into a tangible product. Maybe it’s
          a combination of all of these. But the best explanation I’ve been able
          to offer myself is that it’s just “that feeling.” It is that feeling
          of curiosity, wonder, and amazement I first experienced while dazzling
          my classmates ten years ago. And it is that same feeling that fuels my
          passion to this day.
        </p>
        <div className={styles.footer}>
          <div className={styles.footerleft}>
            <img
              src="/signature.svg"
              alt="Reed Uhlik"
              className={styles.signature}
            />
            <h3>Reed Uhlik</h3>
            <p>&copy; 2024 Reed Uhlik. All rights reserved.</p>
            <h6 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Scroll to Top
            </h6>
          </div>
          <div className={styles.footerright}>
            <a href="mailto:reeduhlik@gmail.com" className={styles.footerlink}>
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/reeduhlik"
              className={styles.footerlink}>
              LinkedIn
            </a>
            <a
              href="https://github.com/reeduhlik"
              className={styles.footerlink}>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
