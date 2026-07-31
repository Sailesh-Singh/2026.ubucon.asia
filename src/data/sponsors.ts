import logoPlaceHolder from "../assets/sponsors/logo_placeholder.svg";
import canonical from "../assets/sponsors/Diamond/Canonical-UbuntuLight-Digital.jpg";
import ima from "../assets/sponsors/Gold/IMA.jpg";
import esun from "../assets/sponsors/Gold/esunbank.jpg";
import cfh from "../assets/sponsors/Gold/cfh.jpg";
import mysql from "../assets/sponsors/Gold/MySQL.jpg";
import berryai from "../assets/sponsors/Gold/BerryAI.jpg";
import nitra from "../assets/sponsors/Gold/Nitra.jpg";
import gamesofa from "../assets/sponsors/Silver/gamesofa.jpg";
import nchc from "../assets/sponsors/Bronze/NCHC.jpg";
import qnap from "../assets/sponsors/Bronze/QNAP.jpg";
import arf from "../assets/sponsors/Bronze/ARF.jpg";
import kktix from "../assets/sponsors/Bronze/KKTIX.jpg";
import onlyoffice from "../assets/sponsors/Bronze/ONLYOFFICE.jpg";
import sunsquare from "../assets/sponsors/Bronze/SunSquare.jpg";
import andes from "../assets/sponsors/Supporter/Andes.jpg";
import appier from "../assets/sponsors/Supporter/Appier.jpg";
import doit from "../assets/sponsors/SpecialThanks/doit.jpg";
import sifive from "../assets/sponsors/SpecialThanks/sifive.jpg";
import rozetaai from "../assets/sponsors/SpecialThanks/rozetaai.jpg";

//Sponsor data structure and types
export type SponsorItem = {
  name?: string;
  nameKey?: string;
  partnerTag?: string;
  description?: string;
  descriptionKey?: string;
  logoUrl: string;
  url: string;
};

export type SponsorLevel = {
  sponsorLevelName: string;
  tierColor: string;
  sizeOnLargeScreen: number;
  sizeOnMediumScreen: number;
  sizeOnSmallScreen: number;
  showPopup: boolean;
  list: SponsorItem[];
};

export const sponsors: SponsorLevel[] = [
  // {
  //   sponsorLevelName: "Titanium",
  //   sizeOnLargeScreen: 6,
  //   sizeOnMediumScreen: 6,
  //   sizeOnSmallScreen: 6,
  //   showPopup: true,
  //   list: [
  //     // {
  //     //   name: "Become a sponsor!",
  //     //   logoUrl: logoPlaceHolder.src,
  //     //   url: "/sponsors/become-a-sponsor",
  //     //   description:
  //     //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
  //     // },
  //   ],
  // },
  {
    sponsorLevelName: "Diamond",
    tierColor: "#4FC3F7",
    sizeOnLargeScreen: 5,
    sizeOnMediumScreen: 5,
    sizeOnSmallScreen: 4,
    showPopup: true,
    list: [
            // {
      //   name: "Become a sponsor!",
      //   nameKey: "dsponsorTitle[Demo]",
      //   partnerTag: "-Demo Partner",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   descriptionKey: "dsponsordescription[Demo]",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // },
      {
        nameKey: "dsponsorTitleCanonical",
        logoUrl: canonical.src,
        url: "https://canonical.com/",
        descriptionKey: "dsponsorDescriptionCanonical",
      },     
    ],
  },
  {
    sponsorLevelName: "Gold",
    tierColor: "#D4A017",
    sizeOnLargeScreen: 3,
    sizeOnMediumScreen: 3,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      // {
      //   name: "Become a sponsor!",
      //   nameKey: "gsponsorTitle[Demo]",
      //   partnerTag: "-Demo Partner",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   descriptionKey: "gsponsordescription[Demo]",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // },
      {
        nameKey: "gsponsorTitleIMA",
        logoUrl: ima.src,
        url: "https://ima.org/",
        descriptionKey: "gsponsordescriptionIMA",
      },
      {
        nameKey: "gsponsorTitleESunBank",
        logoUrl: esun.src,
        url: "https://www.esunbank.com/zh-tw/personal",
        descriptionKey: "gsponsordescriptionESunBank",
      },
      {
        nameKey: "gsponsorTitleCFH",
        logoUrl: cfh.src,
        url: "https://www.cathayholdings.com/holdings/brand/fintech",
        descriptionKey: "gsponsordescriptionCFH",
      },
      {
        nameKey: "gsponsorTitleMySQL",
        logoUrl: mysql.src,
        url: "https://www.mysql.com/",
        descriptionKey: "gsponsordescriptionMySQL",
      },
      {
        nameKey: "gsponsorTitleBerryAI",
        logoUrl: berryai.src,
        url: "https://www.berry-ai.com/",
        descriptionKey: "gsponsordescriptionBerryAI",
      },
      {
        nameKey: "gsponsorTitleNitra",
        logoUrl: nitra.src,
        url: "https://www.nitra.com/",
        descriptionKey: "gsponsordescriptionNitra",
      },
    ],
  },
  {
    sponsorLevelName: "Silver",
    tierColor: "#9E9E9E",
    sizeOnLargeScreen: 3,
    sizeOnMediumScreen: 3,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      // {
      //   name: "Become a sponsor!",
      //   logoUrl: logoPlaceHolder.src,
      //   url: "/sponsors/become-a-sponsor",
      //   description:
      //     "This sponsor slot is currently empty and available! Would like to support our event and become our sponsor? Click 'Visit website' button to join us today!",
      // }, 
      {
        nameKey: "ssponsorTitleGamesofa",
        logoUrl: gamesofa.src,
        url: "https://www.gamesofa.com/",
        descriptionKey: "ssponsordescriptionGamesofa",
      },
    ],
  },

  {
    sponsorLevelName: "Bronze",
    tierColor: "#A9744F",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      {
        nameKey: "bsponsorTitleKKTIX",
        logoUrl: kktix.src,
        url: "https://www.kktix.com/",
        descriptionKey: "bsponsorDescriptionKKTIX",
      },
      {
        nameKey: "bsponsorTitleNchc",
        logoUrl: nchc.src,
        url: "https://www.nchc.org.tw",
        descriptionKey: "bsponsorDescriptionNchc",
      },
      {
        nameKey: "bsponsorTitleONLYOFFICE",
        logoUrl: onlyoffice.src,
        url: "https://www.onlyoffice.com/",
        descriptionKey: "bsponsorDescriptionONLYOFFICE",
      },
      {
        nameKey: "bsponsorTitleQNAP",
        logoUrl: qnap.src,
        url: "https://www.qnap.com/zh-tw",
        descriptionKey: "bsponsorDescriptionQNAP",
      },
      {
        nameKey: "bsponsorTitleARF",
        logoUrl: arf.src,
        url: "https://www.archilife.org/",
        descriptionKey: "bsponsorDescriptionARF",
      },
      {
        nameKey: "bsponsorTitleSunSquare",
        logoUrl: sunsquare.src,
        url: "https://sunsquare.tech/",
        descriptionKey: "bsponsorDescriptionSunSquare",
      },
    ],
  },
  {
    sponsorLevelName: "Supporter",
    tierColor: "#2E8B8B",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      {
        nameKey: "supportersponsorTitleAndes",
        logoUrl: andes.src,
        url: "https://www.andestech.com/en/",
        descriptionKey: "supportersponsorDescriptionAndes",
      },
      {
        nameKey: "supportersponsorTitleAppier",
        logoUrl: appier.src,
        url: "https://www.appier.com/zh-tw/",
        descriptionKey: "supportersponsorDescriptionAppier",
      }
    ],
  },
  {
    sponsorLevelName: "Special Thanks",
    tierColor: "#7E57C2",
    sizeOnLargeScreen: 2,
    sizeOnMediumScreen: 2,
    sizeOnSmallScreen: 2,
    showPopup: true,
    list: [
      {
        nameKey: "stsponsorTitleDoit",
        logoUrl: doit.src,
        // partnerTag: "-Demo Partner",
        url: "https://doit.gov.taipei",
        descriptionKey: "stsponsorDescriptionDoit",
      },
      {
        nameKey: "stsponsorTitleSifive",
        logoUrl: sifive.src,
        // partnerTag: "-Demo Partner",
        url: "https://www.sifive.com",
        descriptionKey: "stsponsorDescriptionSifive",
      },
      {
        nameKey: "stsponsorTitleRozetaAI",
        logoUrl: rozetaai.src,
        url: "https://rozeta.app",
        descriptionKey: "stsponsorDescriptionRozetaAI",
      },
    ],
  },
];
