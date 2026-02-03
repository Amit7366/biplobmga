import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import { isBrowser } from "react-device-detect";

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const params = useParams();
  const location = useLocation();
  const pathAfterDomain = location.pathname.split("/").slice(1, -1).join("/");
  const { user } = useLoaderData();

  localStorage.setItem("url", `/${pathAfterDomain}/${params.id}`);
  let type;
  if (isBrowser) {
    type = "desktop";
  } else {
    type = "mobile";
  }

  useEffect(() => {
    const bookings = {
      type: type,
    };

    fetch(`https://biplobapi.xyz/updateclick/${params.id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then()
      .then();

    // Cleanup function to stop the camera when the component unmounts
    // Set the document title
    document.title = "Megapersonals Classified Hookup";

    // Create a link element for the favicon
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "/favicon.ico"; // Update with the correct path to your favicon

    // Append the favicon to the head
    document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component is unmounted or favicon changes
  }, []);

  return (
    <div
      className="ageCheckPopupInner"
      style={{ backgroundImage: "url(/agepopup_bg.png)" }}
    >
      <img src="/agecake18.png" alt="" className="ageimng" />
      <div className="terms-container">
        <div class="h1">Terms of Use</div>
        <div class="h2">Last Updated: May 8, 2024</div>
        <div class="simpleText">
          <span class="no-bold">Sfanti Grup Solutions SRL</span> (“we, us, our,
          ours, etc.”) is the licensed operator of{" "}
          <a href="https://www.megapersonals.eu">www.megapersonals.eu</a> and
          any affiliated websites and related mobile versions and all services
          provided thereon (“MegaPersonals”). Our goal is to provide a safe,
          authentic, and law-abiding social introduction platform for our users.
          To assist in this effort, we require that all users agree to certain
          terms governing their use of MegaPersonals.
        </div>
        <div class="simpleText">
          These Terms of Use constitute a legal contract that establishes the
          relationship between you, the user, (“you, your, yours, etc.”) and us
          as it relates to your access to and use of MegaPersonals, a platform
          that allows registered users who have passed our strict age
          verification procedures (“Publishers”) to publish personal classified
          posts (“Posts”). We are the exclusive licensee of all text, images,
          graphics, photographs, audio, video, buttons, icons, animations, data,
          messages, software, content, information, or materials on
          MegaPersonals (“Materials”), except for the Posts which belong to the
          Publishers and are licensed to us herein.
        </div>
        <div class="simpleText">
          By accessing or using MegaPersonals, you accept and agree to our
          website policies, including these Terms of Use, and you certify to us
          that (a) you are eighteen (18) years of age or older, and are at least
          the age of majority in your jurisdiction; (b) you have the legal
          capacity to enter into and agree to these Terms of Use; (c) you are
          using MegaPersonals freely, voluntarily, willingly, and for your own
          personal enjoyment; (d) you will only provide accurate and complete
          information to us and promptly update this information as necessary to
          maintain its accuracy and completeness; and (e) you are aware of the
          adult-oriented nature of the content on MegaPersonals, are not
          offended by adult-oriented content, are familiar and compliant with
          your jurisdiction’s laws affecting your right to access and publish
          adult-oriented content.
        </div>
        <div class="simpleText">
          We reserve the right to revise these Terms of Use at any time. You
          agree that we have this unilateral right, and that all modifications
          or changes are in force and enforceable immediately upon posting. The
          updated version supersedes any prior versions immediately upon
          posting, and the prior version is of no continuing legal effect unless
          the revised version specifically refers to the prior version and keeps
          the prior version or portions thereof in effect. We agree that if we
          change anything in these Terms of Use, we will change the “Last
          Updated” date at the top of these Terms of Use. You agree to re-visit
          this page on a frequent basis, and to use the “Refresh” or “Clear
          Cache” function on your browser when doing so. You agree to note the
          date above. If the “Last Updated” date remains unchanged from the last
          time you reviewed these Terms of Use, then you may presume that
          nothing in these Terms of Use has changed since the last time you
          visited. If the “Last Updated” date has changed, then you must review
          the updated Terms of Use in their entirety. You must agree to any
          updated Terms of Use or immediately cease use of MegaPersonals. If you
          fail to review these Terms of Use as required to determine if any
          changes have been made, you assume all responsibility for such
          omission, and you agree that such failure amounts to your affirmative
          waiver of your right to review the updated terms. We are not
          responsible for your neglect of your legal rights.
        </div>
        <div class="simpleText">
          <strong>
            <u>No Illegal Activities:</u>
          </strong>{" "}
          The solicitation, promotion, and facilitation of illegal activities
          are strictly prohibited. If you engage in any illegal activity
          activity or if you solicit or offer to purchase or sell any illegal
          goods or services, whether on MegaPersonals or through links to
          external websites, we may terminate your account without refund and
          take any other appropriate action that we reasonably deem necessary to
          restrict your access to MegaPersonals.
        </div>
        <div class="simpleText">
          <strong>
            <u>No Minors:</u>
          </strong>{" "}
          We take a strong and definite stand against use of MegaPersonals by
          minors, and we only permit Posts to be published by consenting adults.
          We take great measures to ensure that no minors appear in the Posts.
          Publishers are required to undergo strict age verification procedures
          before publishing Posts on MegaPersonals. You understand that all
          depictions on MegaPersonals are of persons over the age of eighteen
          (18) on the date of production. If you seek any form of child sexual
          abuse material, whether real or virtual, (“CSAM”) you must exit
          MegaPersonals immediately. We do not provide or promote CSAM, and we
          do not tolerate those who seek to access or share CSAM. In order to
          further our zero-tolerance policy, you agree to report any suspected
          CSAM as described below. Further, you will not allow any minor to
          access MegaPersonals using your device or account, and you will not
          share the Materials or the Posts with any minor.
        </div>
        <div class="h3">1. Account</div>
        <div class="h3 submenu no-bold">
          A. <u>Registration</u>
        </div>
        <div class="simpleText">
          All users may view the Posts without registering for an account. To
          become a Publisher and publish Posts on MegaPersonals in accordance
          with these Terms of Use, you must (i) register for no more than one
          (1) account on MegaPersonals; (ii) pass our age verification
          procedures; (iii) otherwise meet the requirements set forth in and
          abide by these Terms of Use; and (iv) if you live or reside in any
          jurisdiction other than the United States, provide a valid payment
          method and purchase virtual tokens (“Tokens”).
        </div>
        <div class="simpleText">
          We may contract with independent, third-party age verification service
          providers that may require you to pay for the age verification
          procedures associated with the approval of your account on
          MegaPersonals. You understand and agree that (i) your use of such
          third-party age verification services is governed by the website
          policies of such third-party service, not us; (ii) if you are required
          to pay for age verification services, you are paying the third-party
          service provider, not us, for such age verification services; and
          (iii) your registration and approval of your account as a Publisher on
          MegaPersonals is conditioned upon your payment for and passage of such
          third-party age verification services. We disclaim any liability
          associated with your violation of the policies of any such third-party
          service. You will not be considered a Publisher for the purposes of
          these Terms of Use until your account has been approved by us and your
          age has been verified by our third-party service providers. We reserve
          the right to require you to reverify your age with our third-party
          service providers or otherwise reconfirm your age at any time, for any
          reason.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Accuracy</u>
        </div>
        <div class="simpleText">
          If you fail to provide the required information, if we reasonably
          believe that you have provided false, misleading, inaccurate,
          incomplete, not current, or otherwise incorrect information, if you
          fail to promptly update such information to maintain its accuracy and
          completeness, or if we or any of our authorized agents have reasonable
          grounds to suspect that a violation of this provision has occurred, we
          may reject, suspend, or terminate your account, as well as subject you
          to criminal and civil liability. Acceptance of registration is subject
          to our sole discretion. While we or our authorized agents may require
          you to provide additional information as necessary to verify the
          accuracy of your identity and your information, you understand and
          agree that we do not sponsor or endorse any user or any Post.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>No Account Sharing</u>
        </div>
        <div class="simpleText">
          You will not use, attempt to access, or ask for the login credentials
          for any third party’s account at any time. You will not allow any
          third party to access or use your account at any time, nor provide any
          third party with your login credentials. We will not be liable for any
          loss that you may incur as a result of any third party that uses your
          password or otherwise accesses your account, either with or without
          your knowledge. You will be liable for losses incurred by us or any
          third party due to release of account credentials to unauthorized
          persons.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Termination by You</u>
        </div>
        <div class="simpleText">
          You may delete your account by clicking “Delete Account” in your
          account settings. You will not assign, transfer, sell, or share your
          membership to MegaPersonals. If you do, both you and any unauthorized
          user are jointly and severally liable for any fees that will be due.
        </div>
        <div class="h3 submenu no-bold">
          E. <u>Termination by Us</u>
        </div>
        <div class="simpleText">
          We may suspend or terminate your account, membership, and any licenses
          herein, at any time, by any means, for any reason, in our sole
          discretion, including if you violate these Terms of Use or if your
          account becomes inactive for more than ninety (90) days. If we
          terminate your account, you will be responsible for all charges to
          your account at the time of termination. We are not responsible for
          preserving terminated account information which may be permanently
          deleted in our discretion.
        </div>
        <div class="h3">1. Grant of Rights</div>
        <div class="h3 submenu no-bold">
          A. <u>License for All Users</u>
        </div>
        <div class="simpleText">
          You understand that all we are offering you is access to and use
          MegaPersonals, as we provide it from time to time. You need to provide
          your own access to the Internet, hardware, and software, and you are
          solely responsible for any fees that you incur to access or use
          MegaPersonals. All users may access and use certain public areas of
          MegaPersonals, free of charge. We grant all users a limited,
          nonexclusive, revocable, and nontransferable personal license to
          access and use only those Materials provided on free areas of
          MegaPersonals for private, non-commercial purposes. This free license
          does not include a license to access or use paid areas of
          MegaPersonals or the Materials therein. We reserve the right to limit
          the amount of Materials, Posts, and other features available to you.
          Your license to access and use MegaPersonals and any paid features is
          not a transfer of title. You will not copy or redistribute the
          Material or the Posts, and you will prevent others from unauthorized
          access, use of, or copying of the Materials and the Posts.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Additional License for Publishers</u>
        </div>
        <div class="simpleText">
          If you are a Publisher, we also grant you a limited, nonexclusive,
          revocable, and nontransferable personal license to publish Posts;
          however, we reserve the right to limit your right to publish Posts
          depending on your purchase and exchange of Tokens, as described
          herein. This paid license is for private, non-commercial purposes.
          Except for personally identifiable information covered under our
          Privacy Policy, we will consider Posts non-confidential and
          nonproprietary. We will have no obligation regarding Posts, and we do
          not guarantee confidentiality of the Posts. You are solely responsible
          for the Posts and the consequences of posting the Posts to
          MegaPersonals.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Grant of Rights in the Posts</u>
        </div>
        <div class="simpleText">
          You retain all ownership rights in the Posts. However, you grant us a
          worldwide, perpetual, nonexclusive, royalty-free, sublicensable, and
          transferable license to use, reproduce, distribute, prepare derivative
          works of, display, and perform the Posts for our business (and the
          business of our successors), including for promoting and
          redistributing any part of MegaPersonals (and derivative works of it)
          in any media formats and through any media channels for the purposes
          set forth in these Terms of Use. This license shall include the right
          to post the Posts on different pages of MegaPersonals at our sole
          discretion, and to copy and transfer the Posts to any of our
          affiliate, related, or partner sites, including, but not limited to,
          any website in the “Babylon Network” including{" "}
          <a href="https://www.megapersonals.eu">www.megapersonals.eu</a>,{" "}
          <a href="https://www.listcrawler.eu">www.listcrawler.eu</a>, and{" "}
          <a href="https://www.escortbabylon.eu">www.escortbabylon.eu</a>. We
          may freely use the Posts for any purpose. By posting Posts to
          MegaPersonals, you consent to (i) being depicted the Posts, and (ii)
          the Posts being publicly distributed on MegaPersonals. Further, you
          grant each user of MegaPersonals a worldwide, nonexclusive,
          royalty-free license to access, use, view, display, and perform the
          Posts through MegaPersonals.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Posts Depicting Third Parties</u>
        </div>
        <div class="simpleText">
          You understand and agree that you may share content that depicts one
          or more third parties (“Posts Depicting Third Parties”), only if (i)
          the Posts Depicting Third Parties does not violate any third party’s
          rights; (ii) each individual depicted in the Posts Depicting Third
          Parties is registered as a Publisher on MegaPersonals; and (iii) you
          have obtained and will maintain written documentation confirming that
          each Publisher depicted in the Posts Depicting Third Parties has
          consented to being depicted in the Posts Depicting Third Parties, and
          to the Posts Depicting Third Parties being publicly distributed on
          MegaPersonals. You will provide this written documentation of consent
          and any other necessary releases, licenses, or ownership documents to
          us promptly upon request by us for such documentation. We may refrain
          from publicly distributing any Posts Depicting Third Parties until all
          depicted Publishers have confirmed their identity or for any other
          reason.
        </div>
        <div class="h3 submenu no-bold">
          E. <u>Section 2257</u>
        </div>
        <div class="simpleText">
          You represent and warrant that your Posts are fully compliant with all
          requirements listed at 18 U.S.C. § 2257 et seq. 18 U.S.C. § 2257A, and
          28 CFR Part 75 et seq. (“Section 2257”) and that you possess and
          maintain age verification documents required by Section 2257 in a form
          acceptable to us and that you will continue to maintain originals of
          these documents in that manner and for so long as you maintain a
          Publisher account on MegaPersonals, plus a term of seven (7) years, or
          the length of time required by law (whichever is longer), and that you
          will provide to us an accurate and legible copy of this documentation
          immediately upon request and/or provide us with the required
          information during the Publisher registration process. You further
          consent to any circulation of such records to third parties such as
          our contractors, affiliates, successors, and sub-licensees, at our
          sole discretion. For so long as you maintain a Publisher account on
          MegaPersonals, and for a period of no less than seven (7) years after
          your Publisher account on MegaPersonals is deactivated, you will act
          as the “Custodian of Records” as defined in 28 CFR Part 75 et seq. and
          will maintain all records as required by Section 2257 at the primary
          address of Publisher. Upon request, you will provide us with one or
          more valid government-issued “picture ID cards” as mandated by Section
          2257, that contains your name, photo, and birth date.
        </div>
        <div class="h3">3. Acceptable Use Policy</div>
        <div class="h3 submenu no-bold">
          A. <u>Prohibited Uses for All Users</u>
        </div>
        <div class="simpleText">
          You agree that you will only use MegaPersonals for purposes expressly
          permitted and contemplated by these Terms of Use. You may not use
          MegaPersonals for any other purposes without our express prior written
          consent. Without our express prior written authorization, you will
          not:
        </div>
        <div class="simpleText">
          <ul>
            <li>
              use MegaPersonals for any purpose other than as offered by us,
              including in any way that is violative of these Terms of Use,
              credit card association standards, or any applicable law,
              regulation, or treaty of any applicable governmental body,
              including:
            </li>
            <ul>
              <li>laws prohibiting sex trafficking;</li>
              <li>
                intellectual property right laws protecting patents, copyrights,
                trademarks, trade secrets, and any other intellectual property
                right, including making, obtaining, distributing, or otherwise
                accessing illegal copies of copyrighted, trademarked, or
                patented content, and deleting intellectual property right
                indications and notices; and
              </li>
              <li>
                laws protecting confidentiality, privacy rights, publicity
                rights, or data protection.
              </li>
            </ul>
            <li>
              fail to comply with orders, judgments, or mandates from courts of
              competent jurisdiction.
            </li>
            <li>
              access or use MegaPersonals if you are, or are required to be, a
              registered sex offender in any jurisdiction.
            </li>
            <li>
              link to MegaPersonals on any third-party website in any way that
              is illegal, unfair, or damages or takes advantage of our
              reputation, including any link which establishes or suggests a
              form of association, approval, or endorsement by us where none
              exists.
            </li>
            <li>access the accounts of other users.</li>
            <li>
              engage in antisocial, disruptive, or destructive behavior,
              including “doxing,” “bombing,” “flaming,” “spamming,” “flooding,”
              “trolling,” and “griefing” as those terms are commonly understood
              and used on the Internet, or engage in any other behavior that
              serves no purpose other than to harass, annoy, or offend users.
            </li>
            <li>
              engage in any fraudulent activity, including impersonating any
              real or fictitious third party, falsely claiming affiliation with
              any third party, misrepresenting the source, identity, or contents
              of the Posts.
            </li>
            <li>
              circumvent, disable, damage, or otherwise interfere with the
              operations of MegaPersonals, any user’s enjoyment of
              MegaPersonals, or our security-related features or features that
              prevent, limit, restrict, or otherwise enforce limitations on the
              access to, use of, or copying of MegaPersonals, by any means,
              including posting, linking to, uploading, or otherwise
              disseminating viruses, adware, spyware, malware, logic bombs,
              Trojan horses, worms, harmful components, corrupted data, or other
              malicious code, file, or program designed to interrupt, destroy,
              limit, or monitor the functionality of any computer software or
              hardware or any telecommunications equipment.
            </li>
            <li>
              reverse engineer, decompile, disassemble, or otherwise discover
              the source code of MegaPersonals or any part of it, except and
              only if that activity is expressly permitted by applicable law
              despite this limitation.
            </li>
            <li>
              access or use any automated process (such as a robot, spider,
              scraper, or similar) to access or use MegaPersonals in violation
              of our robot exclusion headers or to scrape all or a substantial
              part of the MegaPersonals (other than in connection with bona fide
              search engine indexing or as we may otherwise expressly permit).
            </li>
            <li>
              modify, adapt, translate, or create derivative works based on
              MegaPersonals, except and only if applicable law expressly permits
              that activity despite this limitation.
            </li>
            <li>
              commercially exploit or make available, mirror, or frame
              MegaPersonals.
            </li>
            <li>
              take any action that imposes or may impose (in our sole
              discretion) an unreasonable or disproportionately large load on
              our technology infrastructure or otherwise make excessive demands
              on it.
            </li>
            <li>
              defraud us or our other users (e.g., working together with a
              member or “hacker” to accept payment with stolen credit cards).
            </li>
            <li>
              attempt to do any of the acts described in this section or assist
              or permit any person in engaging in any of the acts described in
              this section.
            </li>
          </ul>
        </div>
        <div class="simpleText">
          Engaging in any Prohibited Use will be considered a breach of these
          Terms of Use and may result in immediate suspension or termination of
          the user’s account and access to MegaPersonals without notice, in our
          sole discretion. We may pursue any legal remedies or other appropriate
          actions against you if you engage in any of the above Prohibited Uses
          or otherwise violate these Terms of Use or any international, foreign,
          or domestic laws, including civil, criminal, or injunctive relief.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Additional Prohibited Uses for Publishers</u>
        </div>
        <div class="simpleText">
          If you are a Publisher, you will not publish, attempt to publish, nor
          encourage or assist any third party in publishing any Post:
        </div>
        <div class="simpleText">
          <ul>
            <li>
              that is harmful, inaccurate, threatening, abusive, vulgar,
              violent, indecent, harassing, hateful, defamatory, menacing,
              scandalous, inflammatory, blasphemous, racially or ethnically
              offensive, likely to cause annoyance, intimidation, alarm,
              embarrassment, distress, discomfort, or inconvenience, otherwise
              objectionable or inappropriate.
            </li>
            <li>
              that depicts, advertises, promotes, encourages, facilitates, or
              solicits (real, simulated, or implied) (i) scenarios involving
              lack of consent, including rape, sexual assault, kidnapping,
              torture, hypnosis, intoxication, violence, sadomasochistic abuse,
              hardcore bondage, weapons, or asphyxiation; (ii) any depictions of
              minors; (iii) age-play or adult baby/diaper lover themes, (iv)
              incest; (v) bestiality, (vi) necrophilia; (vii) bodily fluids
              including scat, urine, lactation, vomit, and blood, but excluding
              semen, female ejaculation, and saliva; (viii) sex or human
              trafficking; (ix) “revenge porn” defined as any Posts containing
              any individual who has not consented to being depicted in the
              Posts, or to the Posts being distributed on MegaPersonals; (x)
              unsolicited sexual Posts sent directly to another user or Posts
              otherwise sexual objectification of another user in a
              nonconsensual manner; (xi) illegal or illicit drugs; (xii)
              suicide, self-harm, or extreme pain, whether inflicted by yourself
              or a third party, (xiii) any other illegal behavior or behavior
              that may be considered obscene under applicable law.
            </li>
            <li>
              that depicts any third party and which violates our rules on Posts
              Depicting Third Parties as described above.
            </li>
            <li>
              with the intent to extort money or other benefit from a third
              party in exchange for removal of the Post.
            </li>
            <li>
              that contains an employment advertisement or violates
              anti-discrimination laws.
            </li>
            <li>
              that contains the telephone numbers, street addresses, last names,
              email addresses, URLs, geographic location, or any other personal
              information about users or third parties without their consent,
              or, except as expressly authorized in these Terms of Use.
            </li>
          </ul>
        </div>
        <div class="simpleText">
          that uses slang, acronyms, abbreviations, emojis, GIFs, or other media
          to communicate any activity that violates these Terms of Use.
        </div>
        <div class="simpleText">
          <ul>
            <li>
              that contain depictions of nudity which were recorded in any
              public place where members of the public were reasonably likely to
              see you nude.
            </li>
            <li>
              solicit or offer to accept payments for illegal goods or services.
            </li>
          </ul>
        </div>
        <div class="simpleText">
          If you are a Publisher and violate these Additional Prohibited Uses
          for Publishers or any other provision of these Terms of Use, we may
          terminate your account or take any other action as determined in our
          sole discretion.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Reporting User-Generated Posts and User Activities</u>
        </div>
        <div class="simpleText">
          If you are aware of any user engaging in activities that violate these
          Terms of Use, please <a href="/public/contact_us">contact us</a> and
          provide as much detail as possible, including a URL and description of
          the offense, the date and time of identification, the reason we should
          remove the offending Post or investigate the activities, and a
          statement certifying the accuracy of the information you provided to
          us. If you are a Publisher, you must report all offending Posts and
          suspicious activity to us. We may consider you complicit in any fraud
          to which you were knowledgeable of suspicious activity but failed to
          report it.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Law Enforcement</u>
        </div>
        <div class="simpleText">
          We will fully cooperate with law enforcement authorities or orders
          from courts of competent jurisdiction which request or direct us to
          disclose the identity or location of any user in breach of these Terms
          of Use, in accordance with our privacy policies, law enforcement
          policies, and applicable law or regulation. If we receive a subpoena,
          discovery request, production order, search warrant, or court order in
          response to your activities which causes us to incur legal expenses,
          costs, or fees for compliance, you agree to reimburse us for any such
          legal expenses, costs, and fees upon our request.
        </div>
        <div class="h3">4. Billing</div>
        <div class="h3 submenu no-bold">
          A. <u>Free Posts in the United States</u>
        </div>
        <div class="simpleText">
          We do not charge for use of MegaPersonals in the United States, and
          all Publishers in the United States may publish Posts for free in
          accordance with these Terms of Use.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Tokens are Required to Post in All Other Jurisdictions</u>
        </div>
        <div class="simpleText">
          Publishers in all other jurisdictions must purchase Tokens and
          exchange those Tokens for the right to publish Posts on MegaPersonals
          in accordance with these Terms of Use and the current exchange rate
          displayed on MegaPersonals. Tokens have no cash value and are for
          entertainment purposes only. Unused Tokens are not eligible for any
          full or partial refunds. Tokens may be deleted from inactive accounts.
          We may offer you the opportunity to purchase differing amounts of
          Tokens for differing prices. The price of Tokens is displayed on
          MegaPersonals, and you may only purchase Tokens for the currently
          displayed price. We reserve the right to charge additional fees for
          access to or use of MegaPersonals or any of our other features, and to
          change our fee structure at our discretion. All previous offers or
          discounts are unavailable once removed from MegaPersonals. You agree
          to pay all fees or account charges related to any fees, taxes,
          charges, purchases, or upgraded features associated with your account,
          immediately when due in accordance with our stated billing policy, or
          that of our third-party billing agent. You acknowledge that the charge
          on your banking statement may display our company name, one of our
          brand names, or our third-party billing agent’s name. You understand
          and agree that you are responsible for all fees or penalties that are
          associated with your account. Your account will be deemed past due if
          it is not paid in full by the due date. Your card issuer agreement may
          contain additional terms with respect to your rights and liabilities
          as a card holder. You agree to pay all amounts due immediately upon
          cancellation or termination of your account.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Cryptocurrency</u>
        </div>
        <div class="simpleText">
          We may permit you to pay for access to and use of MegaPersonals and
          the features thereon using one or more cryptocurrencies, such as
          Bitcoin. Acceptance of such payment method is in our sole discretion
          and may be of limited duration. Any payment in cryptocurrency is
          irreversible. Refunds of cryptocurrency payments are at our sole
          discretion, and, if allowed, may take the form of cryptocurrency
          transfer, or corresponding cash value of the requested refund, at our
          option. Additional administrative fees may apply to cryptocurrency
          transactions. By paying for Tokens in cryptocurrency, you acknowledge
          that the value of cryptocurrencies is highly volatile and that there
          is a substantial risk of loss associated with using cryptocurrencies.
          You consent to the risk that the value of cryptocurrencies may be
          influenced by activity outside our control, including fluctuating
          public interest in cryptocurrencies, potential regulation of
          cryptocurrencies, and risks associated with hardware, software, or
          Internet connection issues, malicious software, unauthorized access,
          or other communication failures, disruptions, errors, distortions, and
          delays. We do not represent, guarantee, or warrant the accuracy or
          fairness of the value of any cryptocurrency. You are solely
          responsible for making your own independent appraisal and
          investigations into the value of any purchase or sale on
          MegaPersonals.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Third-Party Payment Processing</u>
        </div>
        <div class="simpleText">
          We utilize various third-party payment processors and gateways, and we
          reserve the right to contract with additional third-party payment
          processors and gateways in our sole discretion to process all payments
          associated with MegaPersonals. Such third parties may impose
          additional terms and conditions governing payment processing. You are
          responsible for abiding by such terms. We further disclaim any
          liability associated with your violation of such terms.
        </div>
        <div class="h3 submenu no-bold">
          E. <u>Changes to Your Billing Information</u>
        </div>
        <div class="simpleText">
          You must promptly inform our third-party billing agents of all
          changes, including changes in your address, debit or credit card, and
          other banking information used in connection with billing through
          MegaPersonals. You are responsible for any debit or credit card charge
          backs, dishonored checks, and any related fees that we incur with
          respect to your account, along with any additional fees or penalties
          imposed by our third-party billing agents.
        </div>
        <div class="h3 submenu no-bold">
          F. <u>Chargebacks</u>
        </div>
        <div class="simpleText">
          If you make a purchase on MegaPersonals that results in a chargeback,
          we may terminate your account. You agree to contact us to seek a
          resolution of any issue before initiating a chargeback.
        </div>
        <div class="h3 submenu no-bold">
          G. <u>Changes to Our Billing Methods</u>
        </div>
        <div class="simpleText">
          We reserve the right to make changes at any time to our fees and
          billing methods, including the addition of administrative or
          supplemental charges for any feature, with or without prior notice to
          you.
        </div>
        <div class="h3 submenu no-bold">
          H. <u>Refunds</u>
        </div>
        <div class="simpleText">
          You understand and agree that it is our standard policy that all
          purchases are final and nonrefundable. We reserve the right to address
          all refund requests in our sole discretion. In no instance will a
          refund be provided where the user initiates a chargeback.
        </div>
        <div class="h3 submenu no-bold">
          I. <u>Billing Errors</u>
        </div>
        <div class="simpleText">
          If you believe that you have been erroneously billed for activity
          associated with your account, or if you believe that we have paid you
          an insufficient amount for any activity associated with your account,
          please notify our third-party billing agents immediately of such
          error. If you do not do so within thirty (30) days after such billing
          error first appears on any account statement, the fee in question will
          be deemed acceptable by you for all purposes, including resolution of
          inquiries made by or on behalf of your banking institution. You
          release us from all liabilities and claims of loss resulting from any
          error or discrepancy that is not reported within thirty (30) days of
          the bill being rendered to you. These terms shall supplement and be in
          addition to any terms required by third party billing entities we
          engage to provide billing services. You are responsible for review and
          compliance with such entity’s terms in addition to those contained in
          these Terms of Use.
        </div>
        <div class="h3 submenu no-bold">
          J. <u>Fraudulent Use of Credit Cards</u>
        </div>
        <div class="simpleText">
          We take credit card fraud very seriously. Discovery that you have used
          a stolen or fraudulent credit card will result in the notification of
          the appropriate law enforcement agencies and termination of your
          account.
        </div>
        <div class="h3">5. Dispute Resolution and Damages</div>
        <div class="h3 submenu no-bold">
          A. <u>Governing Law and Venue</u>
        </div>
        <div class="simpleText">
          These Terms of Use and all matters arising out of, or otherwise
          relating to, these Terms of Use shall be governed by the laws of
          Romania, excluding any conflict of law principles. Any and all
          disputes must be, without exception, resolved in Romania, and the
          parties agree to exclusive jurisdiction and venue therein. The parties
          additionally agree that this choice of venue and forum is mandatory
          and not permissive in nature, thereby precluding any possibility of
          litigation between the parties with respect to, or arising out of,
          these Terms of Use in any other jurisdiction. All parties hereby waive
          any right to assert the doctrine of forum non-conveniens or similar
          doctrines, or to object to venue with respect to any proceeding
          brought in accordance with this paragraph or with respect to any
          dispute under these Terms of Use whatsoever. You agree to accept
          service of process by registered or certified mail, Federal Express,
          or Priority Mail, with proof of delivery or return receipt requested,
          sent to your last known address for any legal action arising from
          these Terms of Use. Any final judgment rendered against a party in any
          action or proceeding shall be conclusive as to the subject matter and
          may be enforced in any manner provided by law if such enforcement
          becomes necessary.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Arbitration</u>
        </div>
        <div class="simpleText">
          If you are a Publisher and have a dispute with us arising out of or
          otherwise relating to this Agreement, you shall confer with us and
          negotiate in good faith to attempt to resolve the dispute. If you are
          unable to resolve the dispute with us through direct negotiations,
          then, such dispute, except as otherwise provided herein (“Arbitral
          Claims”), must be resolved through arbitration in the Romanian Court
          of International Arbitration. The submitting party is responsible for
          payment of all filing fees, or reimbursement of such fees to the
          respondent. Arbitral Claims shall include, but are not limited to,
          contract and tort claims of all kinds, and all claims based on any
          federal, state, or local law, statute, or regulation, excepting only
          claims by us for intellectual property infringement, actions for
          injunctions, attachment, garnishment, and other equitable relief. The
          arbitration shall be confidential. The arbitration shall be conducted
          in Bucharest, Romania and conducted by a single arbitrator,
          knowledgeable in Internet and e-Commerce disputes. The arbitrator
          shall be willing to execute an oath of neutrality. The Arbitrator
          shall have no authority to award any punitive or exemplary damages;
          certify a class action; add any parties; vary or ignore the provisions
          of this Agreement; and shall be bound by governing and applicable law.
          There shall be no waiver of the right to arbitration unless such
          waiver is provided affirmatively and in writing by the waiving party
          to the other party. There shall be no implied waiver of this right to
          arbitration. No acts, including the filing of litigation, shall be
          construed as a waiver or a repudiation of the right to arbitrate.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Waivers</u>
        </div>
        <div class="simpleText">
          You hereby waive any right or ability to initiate any class action or
          collective proceeding along with any right to trial by jury.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Rights to Injunctive Relief</u>
        </div>
        <div class="simpleText">
          You acknowledge that remedies at law may be inadequate to provide us
          with full compensation in the event you breach these Terms of Use, and
          that we shall therefore be entitled to seek injunctive relief in the
          event of any such breach, in addition to seeking all other remedies
          available at law or in equity.
        </div>
        <div class="h3 submenu no-bold">
          E. <u>Additional Fees</u>
        </div>
        <div class="simpleText">
          If we are required to enlist the assistance of an attorney,
          investigator, collections agent, or other person to (i) collect any
          damages or any other amount of money from you, (ii) pursue any claim
          against you involving your use of MegaPersonals or any breach of these
          Terms, or (iii) defend any claim brought by you involving your use of
          MegaPersonals or any alleged breach of these Terms, then you
          additionally agree that you will reimburse us for all fees, costs, and
          expenses incurred if we prevail. You understand that even a nominal
          amount of damages may require the expenditure of extensive legal fees,
          travel expenses, costs, and other amounts that may dwarf the damages
          themselves. You agree that you will pay these fees and costs.
        </div>
        <div class="h3">6. Disclaimers</div>
        <div class="h3 submenu no-bold">
          A. <u>We Disclaim All Warranties</u>
        </div>
        <div class="simpleText">
          We provide access to and use of MegaPersonals “as is” and “with all
          faults.” We make no warranty that MegaPersonals will meet your needs
          or requirements. <i>We disclaim all warranties</i> — express,
          statutory, or implied — including warranties of merchantability,
          fitness for a particular purpose, workmanlike effort, quality,
          suitability, truthfulness, usefulness, performance, accuracy,
          completeness, reliability, security, title, exclusivity, quiet
          enjoyment, non-infringement, and warranties that your access to or use
          of MegaPersonals will be uninterrupted, timely, secure, error-free, or
          that loss of Posts will not occur, to the greatest extent provided by
          applicable law. We may change any of the information found on
          MegaPersonals at any time or remove any or all Materials and Posts. We
          make no commitment to update the Materials. We make no warranty
          regarding any goods or services purchased or obtained through
          MegaPersonals or any transaction entered into through MegaPersonals.
          There are no warranties of any kind that extend beyond the face of
          these Terms of Use or that arise because of course of performance,
          course of dealing, or usage of trade.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Use at Your Own Risk</u>
        </div>
        <div class="simpleText">
          You expressly agree that access to and use of MegaPersonals is at your
          own and sole risk. You understand that we cannot and do not guarantee
          or warrant that MegaPersonals will be free of viruses, malware, worms,
          Trojan horses, or other code that may manifest contaminating or
          destructive properties. We do not assume any responsibility or risk
          for your access to or use of the Internet, generally, or
          MegaPersonals, specifically. You understand and agree that any
          Materials or Posts downloaded or otherwise obtained through
          MegaPersonals is done at your own discretion and risk, and that you
          will be solely responsible for any damage to your computer system or
          loss of data that results from your activity.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Offensive and Adult Posts Warning</u>
        </div>
        <div class="simpleText">
          MegaPersonals contains material that may be considered offensive. You
          agree to indemnify and hold us harmless from any liability that may
          arise from any offensive materials viewed on MegaPersonals, and you
          agree to cease accessing and using MegaPersonals should you find them
          offensive. Specifically, you represent and warrant that you are aware
          that MegaPersonals is an inclusive platform which permits the posting
          of adult content by our users, and that you are not offended by adult
          content, including graphic audiovisual depictions of nudity and sexual
          activity. You further represent and warrant that you are familiar with
          and comply with your jurisdiction’s laws and community standards,
          including those affecting your right to access, receive, and transmit
          adult content, and those relating to distributing adult content to
          minors. Finally, if you are a Publisher, you represent and warrant
          that you are aware that your Posts may be viewed by individuals across
          the world that may recognize your true identity, regardless of any
          privacy or geofencing features that may be offered by us.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Parental Controls Notice</u>
        </div>
        <div class="simpleText">
          You acknowledge your responsibility to prevent minors under your care
          from accessing harmful, inappropriate, or adult content. You agree not
          to allow minors to view MegaPersonals, and you agree to take
          responsible measures to prevent them from doing so. Numerous
          commercial online safety filters are available which may help users
          limit minors’ access to harmful, inappropriate, or adult content. You
          are hereby informed that you can research such services by typing the
          words “parental controls” or similar terms, into an Internet search
          engine. We recommend that you conduct appropriate due diligence before
          purchasing or installing any online filter. You agree to take steps to
          prevent minors from viewing MegaPersonals if your computer or mobile
          device can be accessed by a minor. Finally, you agree that if you are
          a parent or guardian of a minor child, it is your responsibility, not
          ours, to keep MegaPersonals from being displayed or accessed by your
          children or wards.
        </div>
        <div class="h3 submenu no-bold">
          E. <u>Registered Sex Offenders and Safety Tips</u>
        </div>
        <div class="simpleText">
          By accessing MegaPersonals, you represent and warrant that you have
          not been convicted of a felony or any criminal sexual offense, and you
          are not required to register as a sex offender with any government
          entity. While we prohibit access to and use of MegaPersonals by
          registered sex offenders, we do not conduct routine criminal
          background checks on users. You are solely responsible for your
          interactions with other users. We do not undertake any obligation to
          monitor user activity, screen, or interview users, investigate the
          background of users, or attempt to verify the accuracy of statements
          made by third parties regarding any user’s background. We expressly
          disclaim any warranty about the conduct of users or those acting on
          their behalf. Remember, online profiles can be falsified. We recommend
          that you use common sense and take reasonable precautions in all
          communications, or interactions with other users. Consider the
          following online safety tips:
        </div>
        <div class="simpleText">
          <ul>
            <li>
              Anyone who can commit identity theft can also falsify an online
              profile.
            </li>
            <li>
              There is no substitute for acting with caution when communicating
              with any stranger who wants to interact with you.
            </li>
            <li>
              Never include your last name, email address, home address, phone
              number, place of work, or any other identifying information in
              initial communications with other users. Stop communications with
              anyone who pressures you for personal or financial information or
              tries in any way to trick you into revealing it.
            </li>
            <li>
              If you choose to have a face-to-face meeting with another user who
              you met on MegaPersonals, tell a family member or friend where you
              will be meeting and when you will return. You should not agree to
              be picked up at your home. Always provide your own transportation
              and meet in a public place with many people around.
            </li>
          </ul>
        </div>
        <div class="h3 submenu no-bold">
          F. <u>Fraud and Scam Warning</u>
        </div>
        <div class="simpleText">
          While we take efforts to prevent our services from being used for any
          fraudulent purposes, we specifically and emphatically warn members
          never to send money to anyone that they interact with on MegaPersonals
          other than through authorized means. We have no way of determining the
          validity of any communication that you may receive from other users,
          and we cannot discern the validity of the person or intentions behind
          such communication. It is a violation of our policy for you to solicit
          money from or to send money to any other user other than through
          authorized means. You expressly understand and agree that if any other
          user that you are in communication with on MegaPersonals requests
          money from you for travel, medical assistance, subsistence or for any
          other reason, it is likely a scam or a fraudulent scheme, and you are
          at a very high risk of being defrauded. You agree to report such
          request along with the username of the requesting user to us
          immediately. While we are not obligated to investigate any such
          report, we may do so in our sole discretion.
        </div>
        <div class="h3 submenu no-bold">
          G. <u>We Do Not Endorse the Posts</u>
        </div>
        <div class="simpleText">
          You understand that much of MegaPersonals is populated with Posts that
          are published by third-party Publishers, and that we do not endorse
          (expressly or implicitly) the opinions expressed in the Posts. You
          further understand that you may be exposed to Posts from a variety of
          sources. As a result, you may be exposed to Posts that are inaccurate,
          offensive, indecent, or objectionable to some, and you waive any
          rights or remedies you have or may have against us for this exposure.
          Please note that we reserve the right to demote or terminate any user
          and to demote, remove, or refuse to publish your Posts, at any time,
          for any reason, with or without prior notice.
        </div>
        <div class="h3 submenu no-bold">
          H. <u>Privacy / Security Warning</u>
        </div>
        <div class="simpleText">
          No website or server is immune from hacking or other breaches of
          security protocols, which can result in the wrongful public release of
          your information and data. Your Posts may be illegally recorded by
          users or third parties, and your Posts may be posted online or
          otherwise distributed without your permission. Such actions may cause
          humiliation, mental / emotional distress, identity theft, and other
          significant damages. You therefore acknowledge and agree we shall not
          be liable for any recording or release of private information,
          personal data, or your Posts, and you hereby release us from all
          liability and claims associated therewith.
        </div>
        <div class="h3 submenu no-bold">
          I. <u>Third-Party Links</u>
        </div>
        <div class="simpleText">
          MegaPersonals may contain links to websites or resources owned and
          operated by our users or third parties. You understand and agree that
          we have no control over, are not responsible for, and do not screen
          nor warrant, endorse, guarantee, or assume responsibility for the
          goods or services provided by our users or on third-party links. We
          will not be a party to or be in any way responsible for monitoring any
          transaction between you and other providers of products or services.
          As with the purchase of a product or service through any medium or in
          any environment, you should use your best judgment and exercise
          caution where appropriate. You agree to hold us harmless from all
          damages and liability that may result from use of third-party links
          that appear on MegaPersonals and any advertising, services, goods,
          products, or other materials available on third-party links. We are
          not responsible for any use of confidential or private information by
          sellers or third parties. You agree that your use of any third-party
          link or the goods or services provided thereon is governed by the
          policies of those third parties, not by these Terms of Use or our
          other policies. We reserve the right to demote or remove any link at
          any time.
        </div>
        <div class="h3 submenu no-bold">
          J. <u>Violations of Law </u>
        </div>
        <div class="simpleText">
          Access to and use of MegaPersonals in violation of any law is strictly
          prohibited. If we determine that you have provided or intend to
          purchase or provide any services in violation of any law, your ability
          to access and use MegaPersonals will be terminated immediately. We do
          hereby disclaim any liability for damages that may arise from you or
          any user providing any services that violates any law. You do hereby
          agree to defend, indemnify, and hold us harmless from any liability
          that may arise for us should you violate any law. You also agree to
          defend and indemnify us should any third party be harmed by your
          illegal actions or should we be obligated to defend any such claims by
          any party.
        </div>
        <div class="h3">7. Indemnification</div>
        <div class="simpleText">
          You agree to defend, indemnify, and hold harmless us and our officers,
          directors, shareholders, employees, independent contractors,
          telecommunication providers, attorneys, and agents, from and against
          all claims, actions, loss, liabilities, expenses, costs, or demands,
          including without limitation legal and accounting fees, for all
          damages directly, indirectly, or consequentially resulting or
          allegedly resulting from your actions, or the actions of another
          person under your authority, including without limitation to
          governmental agencies, use, misuse, or inability to use MegaPersonals,
          or any breach of these Terms of Use by you or another person under
          your authority. We shall promptly notify you by electronic mail of any
          such claim or suit, and we may cooperate fully (at your expense) in
          the defense of such claim or suit. We reserve the right to participate
          in the defense of such claim or suit at our own expense, and choose
          our own legal counsel; however, we are not obligated to do so.
        </div>
        <div class="h3">8. Limitation of Liability</div>
        <div class="simpleText">
          You acknowledge that we will not be liable to you for the Posts or the
          offensive or illegal conduct of any person. You understand that the
          risk of harm or damage from this rests entirely with you, and you
          expressly release us from any liability arising out of the Posts or
          the conduct of any person. You discharge, acquit, and otherwise
          release us, our parent company, agents, employees, officers,
          directors, shareholders, attorneys, and affiliates, from all
          allegations, counts, charges, debts, causes of action, and claims
          relating in any way to the use of, or activities relating to the use
          of MegaPersonals including claims relating to the following:
        </div>
        <div class="simpleText text-padded">
          Negligence, gross negligence, reckless conduct, alienation of
          affections (to the extent recognized in any jurisdiction), intentional
          infliction of emotional distress, intentional interference with
          contract or advantageous business relationship, defamation, privacy,
          publicity, intellectual property infringement, misrepresentation,
          infectious disease, nonconsensual recording or dissemination of
          intimate depictions, deepfakes, violation of prostitution or sex
          trafficking laws, any financial loss not due to our fault, missed
          meetings, unmet expectations, false identities, fraudulent acts by
          others, invasion of privacy, release of personal information, failed
          transactions, purchases or functionality of MegaPersonals,
          unavailability of MegaPersonals, its functions and any other technical
          failure that may result in inaccessibility of MegaPersonals, or any
          claim based on vicarious liability for torts committed by individuals
          met on or through MegaPersonals, including fraud, theft or misuse of
          personal information, assault, battery, stalking, harassment,
          cyber-bullying, rape, theft, cheating, perjury, manslaughter, or
          murder.
        </div>
        <div class="simpleText">
          The above list is intended to be illustrative only, and not exhaustive
          of the types or categories of claims released by you. This release is
          intended by the parties to be interpreted broadly in our favor, and
          thus any ambiguity shall be interpreted in a manner providing release
          of the broadest claims. This release is intended to be a full release
          of claims, and the parties acknowledge the legally binding nature of
          this provision, and the nature of the rights given up in connection
          therewith.
        </div>
        <div class="simpleText">
          We expressly disclaim any liability or responsibility to you for any
          of the following:
        </div>
        <div class="simpleText">
          <ul>
            <li>
              Any loss or damage of any kind incurred because of the Materials
              or the Posts, including errors, mistakes, or inaccuracies thereof
              or any Materials or the Posts that are infringing, obscene,
              indecent, threatening, offensive, defamatory, invasive of privacy,
              or illegal.
            </li>
            <li>
              Personal injury or property damage of any nature resulting from
              your access to and use of MegaPersonals.
            </li>
            <li>
              Any third party’s unauthorized access to or alterations of your
              account, transmissions, data, or Posts.
            </li>
            <li>
              Any interruption or cessation of transmission to or from
              MegaPersonals and any delays or failures you may experience in
              initiating, conducting, or completing any transmissions to or
              transactions through MegaPersonals.
            </li>
            <li>
              Any bugs, viruses, malware, Trojan horses, or the like that may be
              transmitted to or through MegaPersonals by any third party.
            </li>
            <li>
              Any incompatibility between MegaPersonals and your other services,
              hardware, or software.
            </li>
            <li>
              Any claims arising from identification of you based on your Posts,
              regardless of whether you utilize any of our tools to mark certain
              Posts private or block, restrict, or otherwise limit access to
              your Posts in certain geographic locations.
            </li>
          </ul>
        </div>
        <div class="h3">9. Intellectual Property</div>
        <div class="h3 submenu no-bold">
          A. <u>Trademarks</u>
        </div>
        <div class="simpleText">
          MegaPersonals is our brand name and trademark. We aggressively defend
          our intellectual property rights. Other manufacturers’ product and
          service names referenced herein may be trademarks and service marks of
          their respective companies and are the exclusive property of such
          respective owners, and may not be used publicly without the express
          written consent of the owners or holders of such trademarks and
          service marks. All of the marks, logos, domains, and trademarks that
          you find on MegaPersonals may not be used publicly except with express
          written permission from us, and may not be used in any manner that is
          likely to cause confusion among consumers, or in any manner that
          disparages or discredits us.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Copyrights</u>
        </div>
        <div class="simpleText">
          The Materials are our proprietary information and valuable
          intellectual property. We retain all rights, title, and interest in
          the Materials. You retain all rights, title, and interest in the
          Posts, subject to the licenses herein. MegaPersonals, the Materials,
          and the Posts are protected by copyright law. The Materials and the
          Posts may not be copied, downloaded, distributed, republished,
          modified, uploaded, posted, or transmitted in any way without our
          prior written consent. You may not remove or alter, or cause to be
          removed or altered, any copyright, trademark, trade name, service
          mark, or any other proprietary notice or legend appearing on any of
          the Materials or the Posts. Modification or use of the Materials or
          the Posts except as expressly provided in these Terms of Use violates
          our intellectual property rights.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Notification of Copyright Infringement</u>
        </div>
        <div class="simpleText">
          We respect the intellectual property rights of all parties and comply
          with the Digital Millennium Copyright Act (“DMCA”). We do not permit
          copyright infringing activities or infringement of other intellectual
          property rights on MegaPersonals, and we will remove any Post if
          properly notified that the Post infringes on a third party’s
          copyrights. We have adopted a policy regarding termination of repeat
          copyright infringers in compliance with the DMCA, and we reserve the
          right to terminate a user’s access to MegaPersonals, in accordance
          with our DMCA Policy or Repeat Infringer Policy. Copies of our Repeat
          Infringer Policy are available to users upon request.
        </div>
        <div class="h3">10. General</div>
        <div class="h3 submenu no-bold">
          A. <u>Entire Agreement</u>
        </div>
        <div class="simpleText">
          These Terms of Use and any other legal notice or agreement published
          by us on MegaPersonals, form the entire agreement between you and us
          concerning your use of MegaPersonals. It supersedes all prior terms,
          understandings, or agreements between you and us regarding use of
          MegaPersonals. A printed version of these Terms of Use and of any
          notice given in electronic form will be admissible in any proceedings
          based on or relating to these Terms of Use. Such version of these
          Terms of Use shall be utilized to the same evidentiary extent, and
          subject to the same conditions as other business documents and records
          originally generated and maintained in printed form.
        </div>
        <div class="h3 submenu no-bold">
          B. <u>Policies of Our Service Providers</u>
        </div>
        <div class="simpleText">
          You understand and agree that we may use certain third-party service
          providers to provide you with access to and use of MegaPersonals. You
          understand and agree that you must agree to and abide by any user
          terms, privacy policy, or other policy that such third party requires
          you to agree to in order to use their services. In the event of a
          conflict between those policies and our policies, the terms of our
          policies shall govern.
        </div>
        <div class="h3 submenu no-bold">
          C. <u>Assignment and Delegation</u>
        </div>
        <div class="simpleText">
          We may assign any rights or delegate any performance under these Terms
          of Use without notice to you. You will not assign, delegate, or
          sublicense any of your rights or duties without our advanced written
          consent. Any attempted assignment or delegation in violation of this
          provision will be void.
        </div>
        <div class="h3 submenu no-bold">
          D. <u>Severability</u>
        </div>
        <div class="simpleText">
          If any provision of these Terms of Use is determined to be invalid,
          illegal, or unenforceable, the remaining provisions shall continue in
          full force, if the essential terms for each party remain valid,
          binding, and enforceable.
        </div>
        <div class="h3 submenu no-bold">
          E. <u>Cumulative Remedies</u>
        </div>
        <div class="simpleText">
          All rights and remedies provided in these Terms of Use are cumulative
          and not exclusive, and the assertion by a party of any right or remedy
          will not preclude the assertion by the party of any other rights or
          the seeking of any other remedies available at law, in equity, by
          statute, in any other agreement between the parties, or otherwise.
        </div>
        <div class="h3 submenu no-bold">
          F. <u>Successors and Assigns</u>
        </div>
        <div class="simpleText">
          These Terms of Use inure to the benefit of, and are binding on, the
          parties and their respective successors and assigns. This section does
          not address, directly or indirectly, whether a party may assign its
          rights or delegate its performance under these Terms of Use.
        </div>
        <div class="h3 submenu no-bold">
          G. <u>Force Majeure</u>
        </div>
        <div class="simpleText">
          We are not responsible for any failure to perform because of
          unforeseen circumstances or causes beyond our reasonable control,
          including: Acts of God, such as fire, flood, earthquakes, hurricanes,
          tropical storms, or other natural disasters; epidemics; pandemics;
          war, riot, arson, embargoes, acts of civil or military authority, or
          terrorism; fiber cuts; strikes, or shortages in transportation,
          facilities, fuel, energy, labor, or materials; failure of the
          telecommunications or information services infrastructure; hacking,
          spam, data breach, malware, or any failure of a computer, server,
          network, or software for so long as the event continues to delay our
          performance; and unlawful acts of our employees, agents, or
          contractors.
        </div>
        <div class="h3 submenu no-bold">
          H. <u>Notices</u>
        </div>
        <div class="simpleText">
          Any notice required to be given by us under these Terms of Use may be
          provided by email to a functioning email address of the party to be
          noticed, by a general posting on MegaPersonals, or by personal
          delivery via commercial carrier. Notices by customers to us shall be
          given by <a href="/public/contact_us">contacting us</a> at unless
          otherwise specified in these Terms of Use. Either party may change the
          address to which notice is to be sent by written notice to the other
          party pursuant to this provision of these Terms of Use. Notices shall
          be deemed effective upon delivery. Notices delivered by overnight
          carrier shall be deemed delivered on the business day following
          mailing. Notices delivered by any other method shall be deemed given
          upon receipt. Either party may, by giving the other party appropriate
          written notice, change the designated address, email address, or
          recipient for any notice hereunder. Any correctly addressed notice
          that is refused, unclaimed, or undeliverable, because of an act or
          omission of the party to be notified shall be deemed effective as of
          the first date that said notice was refused or deemed undeliverable by
          the postal authorities, messenger, email server, or overnight delivery
          service.
        </div>
        <div class="h3 submenu no-bold">
          I. <u>Communications are Not Private</u>
        </div>
        <div class="simpleText">
          We do not provide any facility for sending or receiving private or
          confidential electronic communications. All messages transmitted to us
          shall be deemed to be readily accessible to the general public. Notice
          is hereby given that all messages entered into MegaPersonals may be
          read by us and our moderators and other agents, regardless of whether
          we are intended recipients of such messages.
        </div>
        <div class="h3 submenu no-bold">
          J. <u>Authorization and Permission to Send Emails to You</u>
        </div>
        <div class="simpleText">
          You authorize us to email you notices, advertisements, and other
          communications. You understand and agree that such communications may
          contain adult content and language which is not suitable for minors.
          This authorization will continue until you request us to remove you
          from our email list. You understand and agree that even unsolicited
          email correspondence from us, or our affiliates, is not spam as that
          term is defined under the law.
        </div>
        <div class="h3 submenu no-bold">
          K. <u>Consideration</u>
        </div>
        <div class="simpleText">
          We allow you to access and use MegaPersonals, as may be limited by
          these Terms of Use, in consideration for your acquiescence to all the
          provisions in these Terms of Use. You agree that such consideration is
          both adequate and received upon your viewing or downloading any
          portion of MegaPersonals.
        </div>
        <div class="h3 submenu no-bold">
          L. <u>Electronic Signatures</u>
        </div>
        <div class="simpleText">
          You agree to be bound by any affirmation, assent, or agreement you
          transmit through MegaPersonals. You agree that when in the future you
          click on an “I agree,” “I consent,” or other similarly worded button,
          check box, or entry field with your mouse, keystroke, or other
          computer device, your agreement or consent will be legally binding and
          enforceable and the legal equivalent of your handwritten signature.
        </div>
        <div class="h3 submenu no-bold">
          M. <u>English Language</u>
        </div>
        <div class="simpleText">
          We have written these Terms of Use and our associated website policies
          in the English language. You are representing your understanding and
          assent to the English language version of these Terms of Use as they
          are published. We are not liable to you or any third party for any
          costs or expenses incurred in translating these Terms of Use. In the
          event that you choose to translate these Terms of Use, you do so at
          your own risk, as only the English language version is binding.
        </div>
        <div class="h3 submenu no-bold">
          N. <u>Export Control</u>
        </div>
        <div class="simpleText">
          You understand and acknowledge that the software elements of
          MegaPersonals may be subject to regulation by governmental agencies
          which prohibit export or diversion of software and other goods to
          certain countries and third parties. Diversion of such elements
          contrary to U.S. or international law is prohibited. You will not
          assist or participate in any such diversion or other violation of
          applicable laws and regulations. You warrant that you will not license
          or otherwise permit anyone not approved to receive controlled
          commodities under applicable laws and regulations and that you will
          abide by such laws and regulations. You agree that none of the
          elements are being or will be acquired for, shipped, transferred, or
          re-exported, directly or indirectly, to proscribed or embargoed
          countries or their nationals or be used for proscribed activities.
        </div>
        <div class="h3 submenu no-bold">
          O. <u>No Agency Relationship</u>
        </div>
        <div class="simpleText">
          Nothing in these Terms of Use shall be deemed to constitute, create,
          imply, give effect to, or otherwise recognize a partnership,
          employment, joint venture, or formal business entity of any kind; and
          the rights and obligations of the parties shall be limited to those
          expressly set forth herein.
        </div>
        <div class="h3 submenu no-bold">
          P. <u>Usages</u>
        </div>
        <div class="simpleText">
          In these Terms of Use, unless otherwise stated or the context
          otherwise requires, the following usages will apply:
        </div>
        <div class="simpleText">
          <ul>
            <li>
              References to a statute will refer to the statute and any
              successor statute, and to all regulations promulgated under or
              implementing the statute or successor, as in effect at the
              relevant time.
            </li>
            <li>
              In computing periods from a specified date to a later specified
              date, the words “from” and “commencing on” (and the like) mean
              “from and including,” and the words “to,” “until,” and “ending on”
              (and the like) mean “to but excluding.”
            </li>
            <li>
              References to a governmental or quasi-governmental agency,
              authority, or instrumentality will also refer to a regulatory body
              that succeeds to the functions of the agency, authority, or
              instrumentality.
            </li>
            <li>
              “A or B” means “A or B or both.” “A, B, or C” means “one or more
              of A, B, and C.” The same construction applies to longer strings.
            </li>
            <li>“Including” means “including, but not limited to.”</li>
          </ul>
        </div>
        <div class="h3 submenu no-bold">
          Q. <u>No Waiver</u>
        </div>
        <div class="simpleText">
          No waiver or action made by us shall be deemed a waiver of any
          subsequent default of the same provision of these Terms of Use. If any
          term, clause, or provision hereof is held invalid or unenforceable by
          a court of competent jurisdiction, such invalidity shall not affect
          the validity or operation of any other term, clause, or provision and
          such invalid term, clause, or provision shall be deemed to be severed
          from these Terms of Use.
        </div>
        <div class="h3 submenu no-bold">
          R. <u>Headings</u>
        </div>
        <div class="simpleText">
          All headings are solely for the convenience of reference and shall not
          affect the meaning, construction, or effect of these Terms of Use.
        </div>
        <div class="h3 submenu no-bold">
          S. <u>Other Jurisdictions/Foreign Law</u>
        </div>
        <div class="simpleText">
          We make no representation that MegaPersonals is appropriate or
          available for use in all locations. You may not access or use
          MegaPersonals from territories where their contents may be illegal or
          is otherwise prohibited. Those who choose to access and use
          MegaPersonals from such locations do so on their own initiative and
          are solely responsible for determining compliance with all applicable
          local laws. Nothing contained in these Terms of Use shall be
          interpreted as an admission that that we are subject to the laws of
          any nation besides Romania.
        </div>
        <div class="h3 submenu no-bold">
          T. <u>Service Not Available in Some Areas</u>
        </div>
        <div class="simpleText">
          You are subject to the laws of the state, province, city, country, or
          other legal entity in which you reside or from which you access and
          use MegaPersonals. MegaPersonals IS VOID WHERE PROHIBITED OR
          RESTRICTED BY LAW. If you open an account or use MegaPersonals while
          located in a prohibited jurisdiction, you will be in violation of the
          law of such jurisdiction and these Terms of Use, and subject to having
          your account suspended or terminated without any notice to you. You
          hereby agree that we cannot be held liable if laws applicable to you
          restrict or prohibit your participation. We make no representations or
          warranties, implicit or explicit, as to your legal right to
          participate in any service offered on MegaPersonals, nor shall any
          person affiliated, or claiming affiliation, with us have authority to
          make any such representations or warranties. We reserve the right to
          restrict access to and use of MegaPersonals in any jurisdiction.
        </div>
        <div class="simpleText text-center">
          <i>[nothing more follows]</i>
        </div>

        <div className="checkbox">
          <input type="checkbox" onChange={handleCheckboxChange} />
          <span>
            I am 18 years old or older <br />
            and I have read and <br />
            agree to the terms.
          </span>
        </div>
      </div>
      <div class="agree-container">
        {isChecked ? (
          <Link
            to={`/home/login/${params.id}`}
            id="ageagree"
            class="btn btn-lg btn-primary"
            type="submit"
          >
            I Agree
          </Link>
        ) : (
          <div class="text">
            you must scroll above, read &amp; agree
            <br /> to the terms, before you can enter
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
