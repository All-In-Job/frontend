import { BasicInformation } from '../components/BasicInformation/BasicInformation';

const Signup = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        gridColumn: '2 / span 10',
      }}
    >
      <BasicInformation />
      {/*<InterestFieldSetup />*/}
    </div>
  );
};

export default Signup;
