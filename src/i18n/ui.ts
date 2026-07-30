export const locales = ["en", "zh-tw"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const ui = {
  en: {
    localeName: "EN",
    ctaPrimary: "Get updates",
    ctaSecondary: "Call for proposals",
    navHome: "Home",
    navCfp: "CFP",
    navTravelGrant: "Travel grant",
    navSponsorship: "Sponsors",
    navTravel: "Venue & Travel",
    navVisas: "Visas and other travel requirements",
    navAccommodation: "Accommodation",
    navUpdates: "Updates",
    navAbout: "About",
    navAboutTheEvent: "About the event",
    navCoC: "Code of Conduct",
    navProgram: "Program",
    navMenu: "Menu",
    navClose: "Close",
    navSponsors: "Our Sponsors",
    navBecomeSponsor: "Become a sponsor",
    navImportantDates: "Important dates",
    navExhibitions: "Exhibitions",
    sectionHighlights: "Highlights",
    highlightCommunity: "Community-led sessions",
    highlightPractical: "Practical workshops",
    highlightRegional: "Regional networking",
    heroDescriptionPrimary:
      "UbuCon Asia is a community-organized conference connecting Ubuntu community in Asia. Join us in Taipei for two days memorable of conference that connects enthusiast, engineers, creators, researchers, entrepreneurs and contributors across Asia.",
    heroDescriptionSecondary:
      "This year's UbuCon Asia will be a joint event with COSCUP. Enabling you to experience the Ubuntu community across Asia and the largest FOSS community gathering in Taiwan!",
    contributeTitle: "Contribute",
    contributeDescription:
      "UbuCon Asia is driven by people from the Ubuntu Community - just like you! Contribute to UbuCon Asia 2026 in the way you want today. Let's make the gathering shine together!",
    contributeSpeakerTitle: "Become a speaker",
    contributeSpeakerDescription:
      "Do you have any interesting insights around Ubuntu you would like to share? Submit a proposal today!",
    contributeSpeakerLinkLabel: "Call for proposals",
    contributePrimeTitle: "Nominate a prime session speaker",
    contributePrimeDescription:
      "Who would you like to see as a prime session speaker - who would inspire both the Ubuntu Community and the entire COSCUP audience? Nominate a person as a prime session speaker today!",
    contributePrimeLinkLabel: "Nominate",
    contributeBoothTitle: "Ubuntu Community Booth",
    contributeBoothDescription:
      "Would you like to help spread Ubuntu and its community to new people face to face? Do you have any projects built with or for Ubuntu you would like to showcase? Consider volunteering at the booth!",
    contributeBoothLinkLabel: "Call for Booth Volunteers",
    sponsorTitle: "Our Sponsors",
    sponsorDescription:
      "UbuCon Asia depends on sponsor support to keep the event accessible and community focused. Meet the organizations that help make this conference possible.",
    sponsorLearnMore: "Learn more",
    volunteerTitle: "Volunteer with us",
    volunteerDescription:
      "UbuCon Asia is powered by community volunteers. Join our team to support the event, speakers, and attendees.",
    volunteerLinkLabel: "Contact the volunteer team",
    languageLabel: "Language",
    ctaPrimaryNotice: "Get updates - coming soon.",
    ctaSecondaryNotice: "Call for proposals - coming soon.",
    sponsorshipNotice: "Sponsorship details - coming soon.",
    travelNotice: "Travel details - coming soon.",
    // Sponsors Details
    dsponsorTitleCanonical: "Canonical",
    dsponsorDescriptionCanonical: "Helping innovators build the future since 2004. Canonical’s story is closely linked to the communities that shape us, including the global community of open source contributors and enthusiasts who are part of our team. Since 2004, we have nurtured a community around Ubuntu, a Linux distribution that leveled the playing field by making software accessible to everyone - whether you are a developer in Calcutta, an end user in Cape Town or a sysadmin in California. Today, we continue to build and grow communities around us, as we help make open source more secure, reliable and manageable at scale. Together, we enable organizations and end users everywhere to innovate with confidence on the largest supported collection of open source software.",
    gsponsorTitleIMA: "Information Management Association",
    gsponsordescriptionIMA: "Founded in 1982, IMA is one of Taiwan's longest-established IT professional organizations, dedicated to strengthening Taiwan's digital competitiveness. IMA remains committed to advancing IT value, fostering cross-sector collaboration, and positioning Taiwan at the forefront of the global digital and AI landscape.",
    gsponsorTitleESunBank: "E.SUN Bank",
    gsponsordescriptionESunBank: "E.SUN Bank, established in 1992 and named after Taiwan’s highest mountain, is dedicated to customer-centric values and committed to developing financial strategies centered around technology and ESG. With more than 1,300 technology professionals forming a technology team responsible for overall digital development, AI applications, IT research, and information security management, we are the first bank in Taiwan to deeply integrate AI into various businesses and the first bank to build our core system using cloud-native technology and a microservices architecture. In recent years, E.SUN Bank has demonstrated outstanding comprehensive performance, winning a total of 8 major awards at the 12th Elite Awards for Taiwan Banking Excellence, which maintain our industry-leading record in total awards received. From Taiwan to Asia, E.SUN Bank steadily grows with flexible strategies and efficient execution, creating sustained value for our customers and moving toward a future of sustainability.",
    gsponsorTitleCFH: "Cathay Financial Holdings",
    gsponsordescriptionCFH: "Cathay Financial Holdings (FHC) is committed to being a technology company with finance at its core. We actively develop and adopt international innovations to build cutting-edge platforms and services through digitalization, data, and technology.By integrating group-level resources, Cathay FHC leverages its strengths in continuous innovation, intelligent applications, and technological leadership to set a benchmark for development environments. At the same time, we continue expanding across the Asia-Pacific, aligning with global trends to become the leading financial institution in the region. Driven by a data-driven culture and a highly collaborative matrix organization, Cathay FHC is dedicated to shaping the future of finance.",
    gsponsorTitleMySQL: "MySQL",
    gsponsordescriptionMySQL: "MySQL is the World’s Most Popular Open Source Database. It powers the most innovative companies including Facebook, Booking, Uber, and Tesla. It is available on-premises and as the MySQL Database Service on Oracle Cloud. For developers, it’s an easy to use, reliable and high-performance database with NoSQL and SQL support. SaaS, ecommerce, financial, telecom, and Fortune 1000 companies rely on the MySQL Enterprise edition advanced security features to protect the privacy of information, prevent data breaches and help meet regulatory requirements such as GDPR, PCI, HIPAA. MySQL High Availability has native HA, fully integrated into the MySQL Server for 99.99% uptime.",
    gsponsorTitleBerryAI: "Berry AI",
    gsponsordescriptionBerryAI: "Berry AI leverages computer vision and AI to help U.S. quick-service restaurant (QSR) operators analyze drive-thru workflows and improve operational efficiency. Our products run in real time at restaurants across the U.S.—detecting vehicle journeys from camera feeds, timing service stages, and generating operational insights. For our engineers, that means working on real-world, large-scale Vision AI challenges every day. Berry AI serves several of the world's top ten fast-food chains. Following our 2025 full-brand agreement with Zaxby's covering nearly 1,000 locations, we kicked off another full-brand deployment with Culver's in 2026, and our business continues to grow rapidly. We are backed by Flytech Technology, a publicly listed Taiwanese company and one of the world's top three POS manufacturers. Our team is based in Taiwan, with members from top universities and major tech companies worldwide—engineers here directly contribute to the core of products deployed in the U.S. market. As we grow, we're also hiring; visit berry-ai.com to learn more.",
    gsponsorTitleNitra: "Nitra",
    gsponsordescriptionNitra: "'The financial home for independent medicine.' Nitra is the AI-native financial platform built for U.S. healthcare specialty practices — helping every independent practice spend less time on paperwork and more time on patients. The platform brings together financial management, a medical supplies marketplace, and patient administration — automating payments, procurement, inventory management, scheduling, insurance eligibility verification, and patient communication. Nitra has raised $187M in funding and surpassed $1B in processing volume, making it one of the fastest-growing healthcare fintech startups in the U.S. From its earliest days, Nitra chose to build its core R&D team in Taiwan. Today, Nitra Taiwan leads the majority of the company's product development, with the local team more than doubling in size over the past six months — spanning software engineers, designers, and product managers — and continuing to expand.",
    ssponsorTitleGamesofa: "Gamesofa Inc.",
    ssponsordescriptionGamesofa: "Founded in 2005, Gamesofa is a leading Taiwanese game developer powered by top-tier core web technologies. We’ve self-developed and operated over 30 multiplayer games across web, iOS, and Android platforms. Living by our motto, 'Fun in Five Minutes,' we successfully launched Taiwan’s #1 online Mahjong game, GodGame Mahjong. We're also capturing hearts across Indonesia, Singapore, Malaysia, and North America with Texas Hold’em, local card games, and our casual simulation hit, Catfe World. With over 75 million registered users worldwide and 2 million+ daily active users, our community keeps growing! We don't just innovate; we run on data. By leveraging advanced data analytics and predictive models, our development, operations, and marketing teams can instantly read the game environment and pivot strategies. At Gamesofa, we combine passion with high-efficiency execution.",
    bsponsorTitleKKTIX: "KKTIX",
    bsponsorDescriptionKKTIX: "As Taiwan and Hong Kong’s leading platform for event ticketing, registration,and live streaming, KKTIX is dedicated to empowering organizers with reliable technology and seamless event experiences. From technical conferences, open-source community meetups, and educational programs to large-scale forums, live performances, and online events, KKTIX supports events of all sizes and formats. Since its founding in 2010, KKTIX has amassed more than 7 million registered members and proudly supports over 75,000 events annually. The platform provides comprehensive solutions—including event registration, ticketing, payment processing, membership management, and data analytics—enabling organizers to focus on curating impactful content and fostering vibrant communities. KKTIX has a long-standing commitment to driving the growth of technology and open-source communities, partnering with developer ecosystems, user groups, and non-profit organizations to bring people together. We believe that every event serves as a catalyst for knowledge sharing and community building, and that the right tools empower people to focus on learning, collaboration, and creating lasting value.",
    bsponsorTitleNchc: "National Center for High-performance Computing",
    bsponsorDescriptionNchc: 'National Center for High-performance Computing (NCHC), founded in 1991,is committed to strengthening national high-performance computing (HPC)technology, providing world-class supercomputing and academic researchnetwork infrastructure, and laying foundation for the development oftechnology in Taiwan. NCHC, in the spirit of "driving transformation for a better future with HPC", is dedicated to promoting HPC technology andapplications development, leading digital transformation in industriesand smart living.',
    bsponsorTitleONLYOFFICE: "ONLYOFFICE",
    bsponsorDescriptionONLYOFFICE: "ONLYOFFICE, an open-source office software project, focuses on advanced and secure office solutions. With over 15 million users worldwide, it is recognized for its innovation in the online office domain. The ONLYOFFICE ecosystem includes collaborative applications such as online editors for text documents, spreadsheets, presentations, forms, and PDFs, along with a room-based collaborative platform. As an international company, ONLYOFFICE has employees and contributors across the globe, with offices located in Singapore, Dallas, Shanghai, Riga, London, Belgrade, Yerevan, and Tashkent.",
    bsponsorTitleQNAP: "QNAP Systems, Inc.",
    bsponsorDescriptionQNAP: "QNAP (Quality Network Appliance Provider) is a global leader in software development, hardware design, and in-house manufacturing, delivering solutions that help businesses and individuals securely store, connect, and innovate. We drive breakthroughs in storage, networking, and smart video, and advance an Edge AI strategy that integrates edge-first deployment with cloud collaboration—enabling real-time data analysis, decision-making, and collaboration across diverse environments. QNAP is also a comprehensive cybersecurity brand, embedding data protection, anti-ransomware resilience, immutable storage, and multi-layered security into our solutions. For us, NAS has evolved beyond storage—turning NAS into the platform that drives AI, edge intelligence, and trusted data protection worldwide.",
    bsponsorTitleARF: "The Archilife Research Foundation",
    bsponsorDescriptionARF: "Since 1987, the Archilife Research Foundation started long-term researches in architecture, sustainability, and go on to other areas of knowledge integration. Efforts including previously giving scholarships in aforementioned areas, and currently holding reading group meetings and communion events for knowledge keepers to better our understandings of the world. Starting from 2011, we also have been sponsoring various open source related events, holding meetups and game jams for local game developers’ groups, in the hope of supporting the growth of relevant communities in these fields.",
    bsponsorTitleSunSquare: "SUN SQUARE Co., Ltd",
    bsponsorDescriptionSunSquare: "Sun Square Co., Ltd. provides cybersecurity, technical consulting, and industry standard implementation services to help organizations strengthen product security, system security, software supply chain security, and practical compliance capabilities. We have long followed open source governance, SBOM, open source supply chain security, industrial cybersecurity, and practical implementation of industry standards. We also continue to participate in and contribute to open source communities and related engineering practices. We believe open technologies and engineering practices are important foundations for building a trustworthy digital environment. Sun Square welcomes developers, researchers, and technology partners interested in open source, security engineering, SBOM, supply chain security, and industrial cybersecurity to connect, exchange ideas, and collaborate with us.",
    supportersponsorTitleAndes: "Andes Technology Corporation",
    supportersponsorDescriptionAndes: "As a Founding Premier member of RISC-V International and a leader in commercial CPU IP, Andes Technology ([TWSE: 6533](https://finance.yahoo.com/quote/6533.TW?p=6533.TW&ncid=stockrec); [SIN: US03420C2089](https://www.bourse.lu/security/US03420C2089/342557); [ISIN: US03420C1099](https://www.bourse.lu/security/US03420C2089/342557)) is driving the global adoption of RISC-V. Andes’ extensive RISC-V Processor IP portfolio spans from ultra-efficient 32-bit CPUs to high-performance 64-bit Out-of-Order multiprocessor coherent clusters. With advanced vector processing, DSP capabilities, the powerful Andes Automated Custom Extension (ACE) framework, end-to-end AI hardware/software stack, ISO 26262 certification with full compliance, and a robust software ecosystem, Andes unlocks the full potential of RISC-V, empowering customers to accelerate innovation across AI, automotive, communications, consumer electronics, data centers, and mobile devices. Over 20 billion Andes-powered SoCs are driving innovations globally. Discover more at [www.andestech.com](http://www.andestech.com/) and connect with Andes on [LinkedIn](https://www.linkedin.com/company/13688177/admin/dashboard/), [X (formerly Twitter)](https://x.com/Andes_Tech) , [YouTube](https://www.youtube.com/c/AndesTechnology) and [Bilibili](https://space.bilibili.com/335295020).",
    supportersponsorTitleAppier: "Appier",
    supportersponsorDescriptionAppier: "Appier (TSE: 4180) is an AI-native Agentic AI as a Service (AaaS) company that empowers businesses to create value through cutting-edge AdTech and MarTech solutions. Founded in 2012 with the vision of “Making AI Easy by Making Software Intelligent,” Appier helps businesses turn AI into ROI through its Ad Cloud, Personalization Cloud, and Data Cloud—each powered by Agentic AI that enables autonomous, adaptive, and real-time decision-making. Today, Appier operates 17 offices across APAC, the US, and EMEA, and is listed on the Tokyo Stock Exchange. Learn more at Appier | Empowering Businesses to Turn AI into ROI .",
  },
  "zh-tw": {
    localeName: "中文",
    ctaPrimary: "接收更新",
    ctaSecondary: "徵稿",
    navHome: "首頁",
    navCfp: "徵稿(CFP)",
    navTravelGrant: "旅遊補助",
    navSponsorship: "贊助",
    navTravel: "會場與旅遊資訊",
    navVisas: "簽證與其他旅遊需求",
    navAccommodation: "住宿",
    navUpdates: "最新消息",
    navProgram: "議程",
    navAbout:"關於",
    navAboutTheEvent: "關於活動",
    navCoC: "行為準則",
    navMenu: "選單",
    navClose: "關閉",
    navSponsors: "我們的贊助商",
    navBecomeSponsor: "加入贊助",
    navImportantDates: "重要日期",
    navExhibitions: "展覽",
    sectionHighlights: "重點內容",
    highlightCommunity: "社群主導的議程",
    highlightPractical: "實作工作坊",
    highlightRegional: "區域交流",
    heroDescriptionPrimary:
      "UbuCon Asia 是由社群主辦的會議，連結亞洲的 Ubuntu 社群。歡迎來台北，參與為期兩天、連結亞洲各地愛好者、工程師、創作者、研究人員、創業家與貢獻者的精彩活動。",
    heroDescriptionSecondary:
      "今年的 UbuCon Asia 將與 COSCUP 聯合舉辦，讓你同時體驗亞洲的 Ubuntu 社群與台灣最大的 FOSS 社群聚會！",
    contributeTitle: "參與貢獻",
    contributeDescription:
      "UbuCon Asia 由 Ubuntu 社群的夥伴共同推動 - 就像你一樣！現在就用你喜歡的方式參與 UbuCon Asia 2026，一起讓這場聚會更精彩。",
    contributeSpeakerTitle: "成為講者",
    contributeSpeakerDescription:
      "你是否有關於 Ubuntu 的有趣觀點想分享？立即提交你的議程提案！",
    contributeSpeakerLinkLabel: "徵稿",
    contributePrimeTitle: "提名主題演講講者",
    contributePrimeDescription:
      "你希望看到誰成為主題演講講者，啟發 Ubuntu 社群與整個 COSCUP 觀眾？今天就提名一位主題演講講者吧！",
    contributePrimeLinkLabel: "提名",
    contributeBoothTitle: "Ubuntu 社群攤位",
    contributeBoothDescription:
      "你想透過面對面的交流，向更多新朋友介紹 Ubuntu 與 Ubuntu 社群嗎？你是否有使用 Ubuntu 或為 Ubuntu 打造的專案想展示？歡迎考慮成為攤位志工！",
    contributeBoothLinkLabel: "攤位志工招募",
    sponsorTitle: "贊助夥伴",
    sponsorDescription:
      "UbuCon Asia 依靠贊助夥伴的支持，讓活動持續對社群開放與友善。認識支持本次活動的夥伴。",
    sponsorLearnMore: "瞭解更多",
    volunteerTitle: "成為志工",
    volunteerDescription:
      "UbuCon Asia 由社群志工推動。歡迎加入我們，一起支援活動、講者與參與者。",
    volunteerLinkLabel: "聯絡志工團隊",
    languageLabel: "語言",
    ctaPrimaryNotice: "接收更新 - 即將推出。",
    ctaSecondaryNotice: "徵稿 - 即將推出。",
    sponsorshipNotice: "贊助資訊 - 即將推出。",
    travelNotice: "旅遊資訊 - 即將推出。",
    // Sponsors Details
    dsponsorTitleCanonical: "Canonical",
    dsponsorDescriptionCanonical: "自 2004 年以來，我們一直致力於幫助創新者建構未來。 Canonical 的發展歷程與塑造我們成長的各個社群緊密相連，其中包括我們團隊中遍布全球的開源貢獻者和愛好者。自 2004 年以來，我們圍繞著 Ubuntu 培育了一個社群。 Ubuntu 是一款 Linux 發行版，它讓每個人都能輕鬆獲得軟體，從而創造了公平的競爭環境——無論您是加爾各答的開發者、開普敦的終端用戶，還是加州的系統管理員。如今，我們仍在不斷建立和發展我們周圍的社區，致力於讓開源軟體更加安全、可靠且易於大規模管理。我們攜手合作，使世界各地的組織和終端用戶都能在最大的開源軟體支援庫上充滿信心地進行創新。",
    gsponsorTitleIMA: "中華民國資訊經理人協會",
    gsponsordescriptionIMA: "IMA成立於1982年，是台灣歷史最悠久的IT專業組織之一，致力於提升台灣的數位競爭力。 IMA始終致力於提升IT價值，促進跨產業合作，並將台灣定位在全球數位和人工智慧領域的前沿。",
    gsponsorTitleESunBank: "玉山銀行",
    gsponsordescriptionESunBank: "玉山銀行成立於1992年，取名自台灣最高的山，以顧客體驗為核心的理念，致 力於構建科技與綠色雙軸轉型的的金融發展策略。作為數位金融的領導品牌， 玉山銀行擁有超過1300位科技人才，負責整體的數位發展、智能應用、資訊研 發以及資安管理。為臺灣首家銀行將人工智慧深入應用於各項業務，也是首家 銀行以開放的雲端原生技術、微服務架構自建核心系統。近年來玉山銀行展現 卓越的綜合績效，榮獲第十二屆菁業獎共8項大獎，累計歷屆獲奬總數持續領先 金融同業。從台灣到亞洲，玉山以靈活的策略和高效的執行力穩健發展，為顧 客創造持續的價值，邁向永續經營的未來。",
    gsponsorTitleCFH: "國泰金融控股公司",
    gsponsordescriptionCFH: "國泰金控致力成為「以金融為核心的科技公司」，透過數位、數據與技術，積極研發並導入國際前瞻技術，打造創新平台與產品服務。整合集團資源、強化一站式數位金融體驗，國泰金控發揮持續創新與技術領先優勢，樹立技術與開發環境典範。同時，積極佈局海外並接軌國際，深耕大中華與東南亞市場，注入數據驅動文化，以高效協作的矩陣式組織，持續朝「亞太地區最佳金融機構」願景邁進，共創更好的未來金融。",
    gsponsorTitleMySQL: "MySQL",
    gsponsordescriptionMySQL: "MySQL 是世界上最受歡迎的開源資料庫。 它為 Facebook、Booking、Uber 和 Tesla 等最具創新性的公司都用它當主要的資料庫。 它可以在本地使用，也可以作為 Oracle 雲端上的 MySQL 資料庫服務使用。 對於開發人員來說，它是一個易於使用、可靠且高效能的資料庫，支援 NoSQL 和 SQL。許多 SaaS、電子商務、金融、電信和Fortune 1000 強公司都依靠 MySQL 企業版的高級安全功能來保護資訊隱私、防止資料外洩，並協助滿足 GDPR、PCI、HIPAA 等監管要求。 MySQL 高可用性具有內建的 HA能力，完全整合到 MySQL 伺服器中，可實現 99.99% 的正常運作時間",
    gsponsorTitleBerryAI: "華捷智能股份有限公司",
    gsponsordescriptionBerryAI: "Berry AI 運用電腦視覺與 AI 技術，協助美國速食（QSR）業者分析得來速服務流程、改善營運效率。我們的產品在全美門市即時運作，從攝影機影像中偵測車輛動線、計時服務流程，並產出營運洞察，工程團隊每天面對的是真實世界、大規模的 Vision AI 挑戰。Berry AI 的客戶包含多間全球前十大連鎖速食品牌。繼 2025 年與 Zaxby's 簽署近千家門市的全品牌導入合約後，2026 年我們再與美國知名品牌 Culver's 展開全品牌部署，業務持續快速成長。Berry 亦獲得台灣上市公司飛捷科技的投資（全球前三大 POS 製造商之一），擁有穩定的資源與客戶基礎。我們的團隊位於台灣，成員來自海內外知名學府與大型科技公司，工程師能直接參與美國市場產品的核心開發。隨著業務成長，我們也在持續徵才，歡迎造訪 berry-ai.com 了解更多。",
    gsponsorTitleNitra: "Nitra",
    gsponsordescriptionNitra: " 'The financial home for independent medicine.' Nitra 是專為美國醫療院所打造的 AI-native 財務平台，讓每間獨立診所都能少花時間處理繁瑣行政、多花時間照顧病患。Nitra 整合財務管理、醫療採購與病患行政系統，建立能自動化支付、採購、庫存管理、預約排程、保險資格驗證與病患溝通等核心流程。成立至今，Nitra 已完成 1.87 億美元（約新台幣 59.8 億元）募資，年化交易額突破 10 億美元，是美國醫療科技領域成長最快的新創之一。Nitra 從創立初期便將產品研發重心設於台灣，目前 Nitra Taiwan 主導公司絕大部分的產品開發工作，團隊規模在過去半年成長超過一倍，成員涵蓋軟體工程師、設計師與產品經理，並持續快速擴編中。",
    ssponsorTitleGamesofa: "慧邦科技股份有限公司  Gamesofa Inc.",
    ssponsordescriptionGamesofa: "慧邦科技Gamesofa成立於2005年，透過優異的網路核心技術，自製研發並行銷營運30餘款web, iOS, Android多人遊戲，是台灣首屈一指的遊戲開發公司。Gamesofa以「5分鐘．想樂最輕鬆」為核心理念，成功打造台灣第一大網路麻將遊戲【神來也麻將】並在印尼、越南、星馬、美加推出德州撲克與當地牌類 及模擬休閒遊戲【貓咪造咖】，全球累積註冊用戶數超過7,500萬，每日活躍用戶超過200萬人。Gamesofa除了在遊戲開發力求創新，更擅長以資料分析 驅動營運決策，讓產品開發、營運、行銷團隊皆能透過數據分析工具與預測模型，快速掌握遊戲狀況，擬定策略，是一間充滿熱情與效率的企業。",
    bsponsorTitleKKTIX: "華娛網路娛樂股份有限公司",
    bsponsorDescriptionKKTIX: "KKTIX作為台港兩地領先的活動售票、報名與線上直播平台，致力於透過穩定 可靠的技術服務，協助主辦單位打造更好的活動體驗。從技術研討會、開源社 群聚會、教育課程到大型論壇、展演活動與線上直播，KKTIX支援各種規模的 活動需求。自2010年成立以來，KKTIX已累積超過700萬名會員，每年服務超過75,000場 活動。平台提供報名管理、售票、金流、會員經營、數據分析等全方位方案，讓主辦單位能專注於內容與社群經營！KKTIX長期支持技術與開源社群發展，陪伴許多開發者社群、使用者社群及非 營利組織舉辦活動。我們相信，每一場活動都是知識交流與社群連結的起點，而好的工具能讓更多人專注於分享、學習與創造價值。",
    bsponsorTitleNchc: "財團法人國家實驗研究院國家高速網路與計算中心",
    bsponsorDescriptionNchc: '財團法人國家實驗研究院國家高速網路與計算中心（簡稱國網中心），於1991年成立，致力扎根國內高速計算技術，提供世界級的高速計算與學研網路設施，為台灣的科技能量奠基。我們秉持著「驅動轉型，為更美好的未來而努力」的信念，積極推動高速計算的技術與應用發展，引領數位轉型並促進智慧生活的改變。',
    bsponsorTitleONLYOFFICE: "ONLYOFFICE",
    bsponsorDescriptionONLYOFFICE: "ONLYOFFICE 是一個國際性的開源專案，由領先的 IT 公司 Ascensio System SIA 開發。目前在中國、新加坡、英國等 7 個國家設有分公司，為全球企業與個人使用者提供高效率的文件處理與協作解決方案，深受網易、百威中國、中信集團、南京大學、中國知網等眾多企業與教育機構的青睞。ONLYOFFICE Docs 是一套功能完整的線上辦公套件，整合了文件編輯、試算表、簡報、可填寫表單以及 PDF 編輯器，並與 Microsoft Office 格式具備高度相容性。此外，還提供數百種格式與樣式設定工具，以及多元的協作功能。",
    bsponsorTitleQNAP: "威聯通科技股份有限公司",
    bsponsorDescriptionQNAP: " QNAP 命名源自於高品質網路設備製造商（Quality Network Appliance Provider），我們致力研發軟體應用，匠心優化硬體設計，並設立自有生產線，以提供全面而先進的科技解決方案。QNAP 專注於儲存、網通及智慧視訊產品創新，並持續拓展人工智慧應用，推動 Edge AI 邊緣優先、雲端協作的整合模式，協助客戶在不同場域中即時分析、決策與協同運作，充分發揮數據價值。QNAP 亦是一個全面性的資安品牌，我們將資料保護、防勒索、不可變儲存與多層資安機制融入解決方案中，確保企業營運不中斷並維持長期資料完整性。在 QNAP 的企業藍圖中，NAS 早已突破儲存裝置的框架，更是驅動人工智慧、邊緣運算與資安防護的重要平台，為全球用戶創造更大優勢與價值。",
    bsponsorTitleARF: "祐生研究基金會",
    bsponsorDescriptionARF: "祐生研究基金會自 1987 年推動建築與環境永續發展之研究開始，推動長期的知識累積與人才培養。除了過去建築、環境、生態、健康與資訊社會與文化等面向之碩士論文獎助主題外，本會目前定期舉辦的聯誼會及讀書會，強化祐生成員的知識密度。 其後，於 2011 年起，本會持續針對國內開源活動進行贊助，也針對國內獨立遊戲開發者，推動知識與資訊分享聚會，期能幫助國內相關社群之發展。",
    bsponsorTitleSunSquare: "源鋼技術顧問有限公司 SUN SQUARE Co., Ltd",
    bsponsorDescriptionSunSquare: "源鋼技術顧問有限公司 Sun Square Co., Ltd. 專注於資安、技術顧問與產業標準導入服務，協助企業強化產品安全、系統安全、軟體供應鏈安全與合規實作能力。我們長期關注開源治理、SBOM、開源供應鏈安全、工控系統資安與產業標準實作，也持續參與並貢獻開源社群與相關技術實務。我們相信開放技術與工程實務是建立可信賴數位環境的重要基礎。源鋼歡迎對開源軟體、安全工程、SBOM、供應鏈安全與工控資安有興趣的開發者、研究者與技術夥伴，一起交流與合作。",
    supportersponsorTitleAndes: "晶心科技股份有限公司",
    supportersponsorDescriptionAndes: "晶心科技股份有限公司于2005年成立於新竹科學園區，2017年於臺灣證交所上市 ([TWSE: 6533](https://finance.yahoo.com/quote/6533.TW?p=6533.TW&ncid=stockrec); [SIN: US03420C2089](https://www.bourse.lu/security/US03420C2089/342557); [ISIN: US03420C1099](https://www.bourse.lu/security/US03420C2089/342557))。晶心是RISC-V國際協會的創始首席會員，也是第一家推出商用RISC-V向量處理器的主流CPU供應商。為滿足當今電子設備的嚴格要求，晶心提供可配置性高的32/64位元高效能CPU核心，包含DSP、FPU、Vector、超純量  (Superscalar)、亂序執行  (Out-of-Order)、多核心及車用系列，可應用於各式ＳｏＣ與應用場景。晶心並提供功能齊全的整合開發環境和全面的軟/硬體解決方案，可幫助客戶在短時間內創新其SoC設計。截至2025年底，Andes-Embedded™ SoC累計出貨量已超過200億顆。欲瞭解更多資訊，請訪問  [https://www.andestech.com](https://www.andestech.com/)。請立即透過[LinkedIn](https://www.linkedin.com/company/13688177/)、[Facebook](https://www.facebook.com/AndesTechTW?locale=zh_TW)、[X(原 Twitter)](https://twitter.com/Andes_Tech)、[YouTube](https://www.youtube.com/c/AndesTechnology/) 以及[Bilibili](https://space.bilibili.com/335295020)追蹤晶心最新消息。",
    supportersponsorTitleAppier: "沛星互動科技股份有限公司",
    supportersponsorDescriptionAppier: "Appier 是一家 AI 原生的 Agentic AI 即服務（AaaS）公司，透過最先進的廣告科技（AdTech）與行銷科技（MarTech）解決方案，協助企業制定更明確的商業決策。創立於 2012 年，Appier 秉持 Making AI Easy by Making Software Intelligent 的願景，致力透過旗下由 Agentic AI 驅動的的廣告雲（Ad Cloud）、個人化雲（Personalization Cloud) 及數據雲（Data Cloud）解決方案，賦予企業自主、自適應、即時決策的能力，將 AI 轉化為可衡量的投資報酬（ROI）。Appier 目前在亞太、美國與 EMEA 地區設有 17 個據點，並於東京證券交易所 Prime 板上市。欲了解更多資訊請參閱 Appier | Empowering Businesses to Turn AI into ROI 。",
  },
} as const;

export type UiKey =
  | "ctaPrimary"
  | "ctaSecondary"
  | "localeName"
  | "navHome"
  | "navAbout"
  | "navAboutTheEvent"
  | "navCoC"
  | "navCfp"
  | "navSponsors"
  | "navBecomeSponsor"
  | "navSponsorship"
  | "navTravel"
  | "navTravelGrant"
  | "navVisas"
  | "navAccommodation"
  | "navUpdates"
  | "navProgram"
  | "navMenu"
  | "navClose"
  | "sectionHighlights"
  | "highlightCommunity"
  | "highlightPractical"
  | "highlightRegional"
  | "heroDescriptionPrimary"
  | "heroDescriptionSecondary"
  | "contributeTitle"
  | "contributeDescription"
  | "contributeSpeakerTitle"
  | "contributeSpeakerDescription"
  | "contributeSpeakerLinkLabel"
  | "contributePrimeTitle"
  | "contributePrimeDescription"
  | "contributePrimeLinkLabel"
  | "contributeBoothTitle"
  | "contributeBoothDescription"
  | "contributeBoothLinkLabel"
  | "sponsorTitle"
  | "sponsorDescription"
  | "sponsorLearnMore"
  | "volunteerTitle"
  | "volunteerDescription"
  | "volunteerLinkLabel"
  | "navBecomeSponsor"
  | "navImportantDates"
  | "navExhibitions"
  | "languageLabel"
  | "ctaPrimaryNotice"
  | "ctaSecondaryNotice"
  | "sponsorshipNotice"
  | "travelNotice"
  | "dsponsorTitleCanonical"
  | "dsponsorDescriptionCanonical"
  | "gsponsorTitleIMA"
  | "gsponsordescriptionIMA"
  | "gsponsorTitleESunBank"
  | "gsponsordescriptionESunBank"
  | "gsponsorTitleCFH"
  | "gsponsordescriptionCFH"
  | "gsponsorTitleMySQL"
  | "gsponsordescriptionMySQL"
  | "gsponsorTitleBerryAI"
  | "gsponsordescriptionBerryAI"
  | "gsponsorTitleNitra"
  | "gsponsordescriptionNitra"
  | "ssponsorTitleGamesofa"
  | "ssponsordescriptionGamesofa"
  | "bsponsorTitleKKTIX"
  | "bsponsorDescriptionKKTIX"
  | "bsponsorTitleNchc"
  | "bsponsorDescriptionNchc"
  | "bsponsorTitleONLYOFFICE"
  | "bsponsorDescriptionONLYOFFICE"
  | "bsponsorTitleQNAP"
  | "bsponsorDescriptionQNAP"
  | "bsponsorTitleARF"
  | "bsponsorDescriptionARF"
  | "bsponsorTitleSunSquare"
  | "bsponsorDescriptionSunSquare"
  | "supportersponsorTitleAndes"
  | "supportersponsorDescriptionAndes";

export const getLocaleFromUrl = (url: URL): Locale => {
  const pathLocale = url.pathname.split("/")[1];
  if (locales.includes(pathLocale as Locale)) {
    return pathLocale as Locale;
  }

  return defaultLocale;
};

const localizedPageFiles = import.meta.glob(
  "../pages/zh-tw/**/*.{astro,md,mdx}",
  { eager: true },
);

const supportedLocalizedPaths = new Set<string>(
  Object.keys(localizedPageFiles).map((filePath) => {
    const normalized = filePath
      .replace(/^\.\.\/pages\/zh-tw/, "")
      .replace(/\.(astro|md|mdx)$/, "");

    if (normalized.endsWith("/index")) {
      return normalized.slice(0, -"/index".length) || "/";
    }

    return normalized || "/";
  }),
);

export const useTranslations = (locale: Locale) => {
  return (key: UiKey) => ui[locale][key];
};

export const getLocalizedPath = (path: string, locale: Locale) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }

  return `/${locale}${normalized}`;
};

export const getLocalizedNavPath = (path: string, locale: Locale) => {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }

  return supportedLocalizedPaths.has(normalized)
    ? `/${locale}${normalized}`
    : normalized;
};
