import React from "react";
import { Link } from "react-router-dom";
import './Author.css'

function Author() {
  return (
    <div className="Policy2">
      <h5 className="Small-heading">Submission Process</h5>
      <p>
        Papers can be submitted online by
        <Link to="/Form"><span>
          clicking here</span>
        </Link>
        , by emailing info@ijrst.com, or by sending a WhatsApp message to
        +91-9555269393. Submissions are now being accepted. There is no deadline
        for submissions because it is a continuous publication. As soon as the
        article is accepted, it will be published.
      </p>
      <h5 className="Small-heading">Review Process</h5>
      <p>
        The method used to determine the content of a manuscript before it is
        published online is the peer review process. Independent professionals/
        experts/ researchers in the related research sector are expected to
        evaluate the uniqueness, validity and relevance of the submitted
        manuscripts to assist editors in deciding whether a manuscript should be
        published in their journal. This process of peer review helps validate
        the research work, create a method by which it can be assessed and
        expand the possibilities of networking within research communities.
        Despite criticism, peer review is still the most generally accepted
        means of validating science. Only papers submitted with bibliographic
        reasoning that follow good scientific criteria, explanations, records
        and proof of their work (e.g. understanding and building on other work
        in the field, relying on rational reasoning and well-designed
        experiments, supporting statements with evidence, etc.) are approved for
        publication in the Journal.
      </p>
      
      
      <h5 className="Small-heading">
        We Follow Double-Blind Peer Review Process
      </h5>
      <p>
        We usually follow the method of double-blind peer review, in which both
        the authors and the editors who will review the submitted papers and
        authorize them for publication are unaware of the identity of each
        other. The editor of the journal assigns the papers obtained from the
        researchers to the reviewers in this process, in which the reviewers are
        initially expected to check the scope of the manuscript, whether it
        suits the journal or not, to provide their comments or any
        suggestions/edits in the paper (if necessary) to accept the manuscript
        for publication in the journal. This constitutes the basis for
        determining if the work should be approved, revised as acceptable, or
        rejected. Submissions with significant shortcomings would be rejected,
        but after they have been thoroughly revised, they can be re-submitted.
        This does not necessarily mean it is of low quality if a job is refused.
        A paper can also be rejected because it does not fall within the
        specialisation field of the journal or because it does not meet the high
        expectations of innovation and originality that the journal in question
        demands. If the reviewer recommends only minor edits, the journal will
        publish the article, but the author is asked to make certain corrections
        before that.
      </p>
      <p className="buttons">
        
        <h1>Frequently asked Questions</h1>
         

        <Link to="/InstructionForAuthor">
          <button className="btn2">Instructions for author</button>
        </Link>

        <Link to="/Form">
          <button className="btn2">Invitation for Reviewers</button>
        </Link>

        <Link to="/ManuscriptWithDrawal">
          <button className="btn2">Manuscript With Drawal</button>
        </Link>

        <Link to="/PeerReviewGuidelines">
          <button className="btn2">Peer Review Guidelines</button>
        </Link>
      </p>
    </div>
  );
}

export default Author;