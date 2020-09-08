import React from 'react';
import './css/passwordstrength.css';
import zxcvbn from 'zxcvbn';

class PasswordStrengthMeter extends React.Component {

  createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Faible';
      case 1:
        return 'Faible';
      case 2:
        return 'Moyenne';
      case 3:
        return 'Bonne';
      case 4:
        return 'Forte';
      default:
        return 'Faible';
    }
  }

  render() {
    const { password } = this.props;
    //console.log(this.props)
    const testedResult = zxcvbn(password);
    return (
      <div className="password-strength-meter">
        <progress
          className={`password-strength-meter-progress strength-${this.createPasswordLabel(testedResult)}`}
          value={testedResult.score}
          max="4"
        />
        <br />
        <label
          className="password-strength-meter-label">
          {password && (
            <>
              <strong>Robustesse du mot de passe:</strong> {this.createPasswordLabel(testedResult)}
            </>
          )}
        </label>
      </div>
    );
  }
}

export default PasswordStrengthMeter;