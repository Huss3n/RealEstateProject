import React, { useEffect } from "react";
// import Featured from "../Layouts/About/Featured";
import MiniNav from "../components/MiniNav";
import { FaUsers, FaHeadset, FaDesktop, FaCertificate, FaShoppingCart, FaHandshake, FaKey } from "react-icons/fa";
import Footer from "../components/Footer";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Who We Are | House Hive";
  }, []);

  return (
    <div className="bg-gray-300">
      <div className="mx-auto max-w-[1280px] w-[90%] lg:p-6">
        <div className="pt-4">
          <MiniNav />
        </div>
        <div className="leading-7 text-justify">
          <div className="grid gap-12">
            <div>
              <h2 className="text-4xl text-gray-800 font-semibold lg:text-5xl mb-10 ">Acceptance Terms</h2>
              <p className="">
                By accessing or using any part of the <span className="font-bold">House Hive</span> Network or the services provided on it or other Web sites, Web pages or other
                applications as set forth below (collectively, the “Services”), you agree to accept and comply with the terms, conditions, and notices stated herein and as may be
                modified by House Hive from time-to-time without notice to you (the “Terms of Use”). These Terms of Use constitute a binding contract between House Hive and you.
                You are responsible for regularly reviewing the Terms of Use. You can review the most current version of the Terms of Use at any time at
                <a href="/Terms-of-use" className="text-blue-700 underline ">
                  Terms of use
                </a>
                . If you do not wish to be bound by these Terms of Use, please do not access or use any part of the House Hive Network.
              </p>
              <br />
              <p>
                Additional terms may govern use of certain Web sites or other parts of the House Hive Network. In the event that any provision, term or guideline contained on a
                particular Web site or other part of the House Hive Network conflicts with the Terms of Use, the terms of such Web site or other part of the House Hive Network
                shall control over the Terms of Use except with respect to the General Terms set forth below, which shall at all times control.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">General Use of The House Hive Network</h3>
              <p className="text-gray-800">
                Unless specified otherwise, House Hive offers you access to the House Hive Network solely for your personal and non-commercial uses. You agree to only access or use
                the House Hive Network only for legal purposes that are permitted by the Terms of Use. Among other things, you agree not to:
              </p>
              <li>
                Except with the express written permission of House Hive, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works
                from, frame in another Web page, use on any other Web site or application, transfer or sell any information, software, lists of users, databases or other lists,
                products or services provided through or obtained from the House Hive Network, including without limitation, engaging in the practices of “screen scraping,”
                “database scraping,” or any other activity with the purpose of obtaining lists of users or other information;
              </li>
              <li>Damage, disable, overburden, or impair the House Hive Network or interfere with any other party’s use and enjoyment of the House Hive Network;</li>
              <li>Obtain or attempt to obtain any materials or information through any means not made readily accessible by House Hive through the House Hive Network.</li>
              <p>
                The origin of any link to any House Hive Network home page must be accompanied by a clear and prominent attribution indicating that the link is connected to the
                House Hive Network home page. By creating a link to the House Hive Network, you agree that (a) you will not employ any technology that results in the placement of
                content from the House Hive Network in a frame and/or a reduced pop-up window and/or any other display mechanism which changes appearance of the House Hive Network
                from how it would appear if a user typed the URL in a typical browser line, (b) your site shall not display content or link to other Web sites or applications that
                contain content that is illegal, obscene, indecent, disparaging, discriminating or otherwise offensive, (c) you have duly registered your domain name and possess
                all rights necessary to use the same, and (d) you shall not in any manner access, collect, store, disclose, transfer or use any information obtained or derived from
                a user’s access to or use of the House Hive Network. House Hive reserves the right to revoke your permission to create such link at any time in its sole discretion
                and you agree to immediately cease using the link at any time that House Hive so requests. You agree that House Hive may in its sole discretion and at any time
                terminate your access to and use of the House Hive Network, or any part thereof, with or without notice. You further agree that use of the House Hive Network and
                any of its Services shall be immediately terminated if you violate these Terms of Use. In addition, House Hive reserves the right, in its sole discretion, to modify
                or discontinue the Services or any portion thereof, with or without notice, and without liability to you. The Services provided through the House Hive Network may
                also be located on third party Web sites or applications, via a link, click-through advertising, or otherwise. Nothing contained in any of these Services is an
                offer or promise by House Hive to sell a specific product for a specific price or that any advertiser will sell any product or service for any purpose or price or
                on any specific terms. In addition, House Hive does not make any representation or warranty with respect to such third party Services, and is not responsible for
                their accuracy, sufficiency, veracity, completeness, or timeliness. You are responsible for confirming the sufficiency and reliability of any third party Services,
                and you hereby release House Hive from any and all claims, demands, liability and damages (actual or consequential) of every kind and nature, known and unknown,
                suspected or unsuspected, disclosed or undisclosed, arising out of or in any way connected with your use of such Services. Further, please note that certain of the
                interactive Services may be financial or mortgage tools that provide information and customized information based on user-inputted data. These tools are for the
                purpose of performing calculations, and are not an offer to lend. Interest rates shown are for demonstration purposes only. Actual market interest rates may vary.
                You acknowledge that House Hive is not a real estate broker, mortgage broker or mortgage lender, and House Hive does not aid or assist borrowers in obtaining,
                solicit borrowers or lenders for, negotiate or make loans secured by liens on real property Please note that you may be subject to additional and/or different
                terms, conditions, and privacy policies when you use third party Services, Content (as defined below), software or sites.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">Content Contained in the House Hive Network</h3>
              <p className="text-gray-800">
                The House Hive Network and all of its contents including, but not limited to, all information, text, messages, images, photos, illustrations, designs, icons, video
                clips, sounds, files, trademarks, copyrighted material, trade dress, software, specifications, catalogs, literature, technical information, advertisements and other
                content or materials on the House Hive Network (collectively, “Content”) is owned by House Hive and/or third parties with all rights reserved unless otherwise
                noted. House Hive grants you a limited license to access and use the House Hive Network and Content solely for informational, personal and non-commercial purposes
                (including printing individual pages from the House Hive Network provided that you retain all copyright and other proprietary notices contained thereon). You are
                strictly prohibited from downloading (other than page caching) modifying, or making any other use of the House Hive Network or Content, except with express written
                consent of House Hive. You understand that all third party Content posted on, transmitted through, or linked from the House Hive Network, is the sole responsibility
                of the third party originator of such Content. Content is provided through the House Hive Network AS IS, and you agree that the use of and reliance on any Content
                is at your own risk, and that under no circumstances shall House Hive be liable for any Content or for any loss or damage of any kind incurred as a result of the
                use of any Content made available via the Services. Insofar as the House Hive Network implements Openstreet Maps from Openstreet, your use of Opentreet Maps is
                subject to the Openstreet Maps. Additional Terms of Service at{" "}
                <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer" className="text-blue-800">
                  Openstreetmaps
                </a>
                , including the Google Privacy Policy at{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-blue-800">
                  Google Privacy Policy
                </a>{" "}
                You acknowledge that House Hive does not screen or approve third-party Content, and that House Hive shall have the right (but not the obligation) in its sole
                discretion to refuse, modify, delete or House Hive any Content that is available via the House Hive Network, for any reason.
              </p>
              <br />
              <p>
                Our team of seasoned professionals is well-equipped to handle your real estate needs, regardless of your experience in the market. As your trusted partner, we
                strive to help you achieve your goals and make your real estate journey a resounding success. Get in touch with us today to learn more about how we can assist you
                in your real estate endeavors.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">Content You Provide</h3>
              <p className="text-gray-800">
                To the extent that you post, upload, input, submit or otherwise transmit (collectively, “Transmit” or “Transmitting” as appropriate) Content on or through the House
                Hive Network, you agree to provide true, accurate and complete information and to refrain from impersonating or falsely representing your affiliation with any
                person or entity. You are entirely responsible for all Content that you provide or otherwise make available via the House Hive Network. You also warrant and
                represent that you own or otherwise control all of the rights to such Content including, without limitation, all the rights necessary for you to Transmit such
                Content, and to transfer your or others’ interests in such Content to House Hive as provided below. You promise that you will not use the House Hive Network to:
              </p>
              <p>Transmit any Content</p>
              <li>not related to appropriate subject matters;</li>
              <li>which is misleading to others, including consumers;</li>
              <li>
                that is unlawful, harmful, threatening, abusive, harassing, tortuous, defamatory, vulgar, obscene, libelous, invasive of another’s privacy, hateful, or racially,
                ethnically or otherwise objectionable;
              </li>
              <li>that you do not have a right to post and transmit under any law or under contractual relationships;</li>
              <li>
                such that such posting, uploading, or transmission constitutes the infringement of any patent, trademark, trade secret, copyright or other proprietary rights of any
                party;
              </li>
              <li>
                and materials that contain software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer
                software or hardware or telecommunications equipment; or
              </li>
            </div>

            <div></div>

            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">Eligibility; Accounts and Registration</h3>
              <p className="text-gray-800">
                Terms of Use, you represent and warrant that: (a) you are at least 18 years of age; (b) you have not previously been suspended or reHouse Hived from the Services;
                and (c) your registration and your use of the Services complies with all applicable laws and regulations. To access some features of the Services, you may be
                required to register for an account and agree to a Product’s Terms, to the extent applicable to that service, which may be incorporated herein or available on a
                separate House Hive Companies site. When you register for an account you will be asked to provide us with some information about yourself, such as email address,
                phone number, or other contact information. You agree that the information you provide is accurate and that you will keep it accurate and up-to-date at all times.
                When you register, you will be asked to provide a password. You are solely responsible for maintaining the confidentiality of your account and password, and you are
                responsible for all actions taken via your account. You may not share your user account(s) with others. Unless you have entered into a commercial agreement with us
                permitting you to use the Services for transactions on behalf of another person, you may use the Services only for transactions on your own behalf.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">Prohibited Use</h3>
              <p className="text-gray-800">
                BY USING THE SERVICES, YOU AGREE NOT TO: <br /> reproduce, modify, distribute, display or otherwise provide access to, create derivative works from, decompile,
                disassemble, or reverse engineer any portion of the Services, except as explicitly permitted by any Product’s Terms to the extent applicable to that product’s
                Services; provide/post/authorize a link to any of the Services (including but not limited to an agent profile page) from a third-party website that is not a real
                estate-related website owned or operated by a real estate or lending professional or institution; reHouse Hive or modify any copyright or other intellectual
                property notices that appear in the Services; use the Services in any way that is unlawful, or harms the House Hive Companies, its service providers, suppliers,
                affiliates, or any other user; use the Services in any way to discriminate against any individual or class of individuals protected under federal, state or local
                laws, or which may have a discriminatory impact against any individual or class of individuals, or which otherwise promotes illegal, racist or discriminatory
                activities or outcomes; distribute or post spam or other unsolicited messages, chain letters, pyramid schemes, or similar communications through the Services;
                impersonate another person, misrepresent your affiliation with another person or entity, or make any representation to any third party under false pretenses;
                reproduce, publicly display, or otherwise make accessible on or through any other website, application, or service any reviews, ratings, or profile information
                about real estate, lending, or other professionals, underlying images of or information about real estate listings, or other data or content available through the
                Services, except as explicitly permitted by us for a particular portion of the Services; upload invalid data, viruses, worms, or other software agents to the
                Services; post, reproduce, publicly display, or otherwise make accessible any content, which we, in our sole judgement and discretion, consider illegal, offensive
                or objectionable including without limitation content that harasses, discriminates, demeans, threatens or disparages any individual or class of individuals;
                interfere with, or compromise the system integrity or security of the Services, or otherwise bypass any measures we may use to prevent or restrict access to the
                Services; conduct automated queries (including screen and database scraping, spiders, robots, crawlers, bypassing “captcha” or similar precautions, or any other
                automated activity with the purpose of obtaining information from the Services) on the Services; use any of the House Hive Companies’ trademarks as part of your
                screen name or email address on the Services; access or use any of the Services to develop competitive products or services; or attempt to, or permit or encourage
                any third party to, do any of the above.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">Limitation of Liability/Exclusive Remedy</h3>
              <p className="text-gray-800">
                IN NO EVENT WILL THE House Hive COMPANIES OR ANY OF OUR AFFILIATES BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES (INCLUDING
                DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS) ARISING OUT OF, BASED ON, OR RESULTING FROM THESE TERMS OF USE OR YOUR USE OR ACCESS, OR
                INABILITY TO USE OR ACCESS, THE SERVICES OR ANY MATERIALS ON THE SERVICES, WHETHER BASED ON: (A) BREACH OF CONTRACT; (B) BREACH OF WARRANTY; (C) NEGLIGENCE; OR (D)
                ANY OTHER CAUSE OF ACTION, EVEN IF THE House Hive COMPANIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,
                THE House Hive COMPANIES ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF MATERIALS; (II) PERSONAL INJURY OR PROPERTY DAMAGE,
                OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF THE SERVICES; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL
                PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
                THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY; (VI) ANY ERRORS OR OMISSIONS IN ANY MATERIALS OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT
                OF THE USE OF ANY MATERIALS POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICES; OR (VII) USER MATERIALS OR THE DEFAMATORY, OFFENSIVE, OR
                ILLEGAL CONDUCT OF ANY THIRD PARTY. THE AGGREGATE LIABILITY OF THE House Hive COMPANIES AND ANY OF OUR AFFILIATES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING
                TO THE USE OF, OR INABILITY TO USE, ANY PORTION OF THE SERVICES OR OTHERWISE UNDER THESE TERMS OF USE, WHETHER UNDER CONTRACT, TORT, OR OTHERWISE, IS LIMITED TO THE
                GREATER OF: (1) THE AMOUNT YOU HAVE PAID TO THE House Hive COMPANIES FOR THE SERVICES IN THE 12 MONTHS PRIOR TO THE EVENTS OR CIRCUMSTANCES GIVING RISE TO THE
                CLAIMS; OR (2) $100. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL DAMAGES. ACCORDINGLY, THE ABOVE LIMITATIONS MAY NOT
                APPLY TO YOU. EACH PROVISION OF THESE TERMS OF USE THAT PROVIDES FOR A LIMITATION OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS INTENDED TO AND
                DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE AGREEMENT OF THE PARTIES. THE LIMITATIONS IN THIS
                SECTION WILL APPLY EVEN IF ANY LIMITED REMEDY FAILS ITS ESSENTIAL PURPOSE.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">Interpretation of the Terms of Use</h3>
              <p className="text-gray-800">
                If any part of the Terms of Use is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and
                liability limitations contained herein, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely
                matches the intent of the original provision and the remainder of the Terms of Use shall continue in effect. Unless otherwise specified herein (or in any other
                definitive written agreement between you and House Hive), the Terms of Use constitutes the entire agreement between you and House Hive with respect to the House
                Hive Network and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between you and House Hive with
                respect to the House Hive Network. A printed version of the Terms of Use and of any notice given in electronic form shall be admissible in judicial or
                administrative proceedings based upon or relating to the Terms of Use to the same extent and subject to the same conditions as other business documents and records
                originally generated and maintained in printed form.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
