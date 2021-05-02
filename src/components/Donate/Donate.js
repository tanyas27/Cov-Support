import classes from './Donate.module.css';

function Donate() {
  return (
    <div className={classes.donate}>
        <h2>Donate for a Cause</h2>
        <hr/>
        <p>I hereby am adding few links to the respective communities working continuously to serve in this pandemic.</p>
        <ul>
          <li>
            <h4>Khalsa Aid</h4>
            <p>Khalsa Aid is an international NGO with the aim to provide humanitarian aid in disaster areas and civil conflict zones around the world. The organisation is based upon the Sikh principle of "Recognise the whole human race as one".<a href="https://www.khalsaaid.org/donate">Donate here</a></p>
          </li>
          <li>
            <h4>Give India</h4>
            <p>GiveIndia is a donation platform that allows you to support a cause of your choice from about 200 NGOs that have been scrutinised for transparency and credibility. Established in December 1999, GiveIndia ensures that your contribution reaches the organisation you are passionate about and keeps you updated about its progress.<a href="https://gi.giveindia.org/">Donate here</a></p>
          </li>
        </ul>
    </div>
  );
}

export default Donate;
