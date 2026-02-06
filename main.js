import axios from "axios";
import * as cheerio from "cheerio";

const URL = "https://www.imdb.com/title/tt4154796/?ref_=fn_t_2";
//   "https://www.imdb.com/title/tt22868010/?ref_=nv_sr_srsg_1_tt_6_nm_1_in_0_q_silent";

(async () => {
  const res = await axios.get(URL, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",

      "Accept":
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-language": "en-US,en;q=0.9",
      "Content-type": "application/json",
      "Cookie":
        "session-id=138-7946978-8018925; session-id-time=2082787201l; ad-oo=0; ci=eyJhZ2VTaWduYWwiOiJBRFVMVCIsImlzR2RwciI6ZmFsc2V9; ubid-main=130-2558515-0825709; session-token=VIasDjN3eZkS8WBfvNuJqcxmfM3Y8Bckc9FXR1ITrysUeAOYAG5c9q35DW3dL/CZ26ztQXDd0/OgITpi7YyKVcwCU3Ne0+b8oZ8JvlUcbkvOqlfw0EkrbTm3c0hno47FRFbAoMLA/8uWMBfyOds59+zBI5XcE3ZokLFyXGOD4PStQGW0pqlznG8Oxt9alY79+7pCmnRZU21MIa1Nvcy1S91CDzSQSahMyVcIBjRZ/FOALPWIi0A7137CSlsFXfWoE+FcgACAj52ULWhq5y9IVx9JxREAqCdZq4vxUZHs1PqIcXoKs64dM29aAOEjji77zsx32yBAklFrREF9qM8dO2LDtYDfAIWe",
      "Origin": "https://www.imdb.com",
      "Priority": "u=1, i",
      "Referer": "https://www.imdb.com/",
      "Sec-ch-ua":
        'Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144',
    },
  });
  const data = res.data

  const $ = cheerio.load(data);
  console.log(res.headers)
  let title = $('div[class="sc-af040695-0 iOwuHP"] > h1').text();

  console.log(title);

  let rating = $("div.sc-4dc495c1-2.jaffDQ span.sc-4dc495c1-1.lbQcRY")
    .first()
    .text()
    .trim();

  console.log("rating : ", rating);
})();
