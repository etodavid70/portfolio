import React from "react";
import '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact, faDocker, faPython, faAndroid} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Kotlin",
    "Java",
    "Android Studio",
    "XML Layout",
    "Android SDK",
    "Jetpack Compose",
    "Gradle",
    "WorkManager",
    "MVVM"
];

const labelsSecond = [
    "Dart",
    "Flutter SDk",
    "FVM",
    "android",
    "ios",
    "Getx",
    "Provider",
    "RiverPod",
    "MVC",
    "MVVM"
];

const labelsThird = [
    "Javascript",
    "Typescript",
    "Redux",
    "Zustand",
    "Axios",
    "Android",
    "ios",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faAndroid} size="3x" style={{color: "#3ddc84"}}/>
                        <h3>Android Native(Kotlin)</h3>
                        <p>Deep knowledge of Android SDK and modern
                            Android architecture components, MVVM and Clean
                            Architecture</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png"
                            alt="Flutter"
                            width={150}
                        />
                        <h3>Flutter</h3>
                        <p>
                            Expertise in Flutter for cross-platform (iOS and
                            Android) app development.
                            Knowledge of state management solutions like
                            GetX (or alternatives like Riverpod, Provider,
                            BLoC).</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label}/>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" style={{ color: "#58c4dc"}}/>
                        <h3>React Native</h3>
                        <p>Proficient in building cross-platform mobile
                            applications using React Native.
                            Strong understanding of React components, hooks
                            (useState, useEffect, useContext), and state
                            management using Redux or Zustand.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;