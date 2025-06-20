import styles from "./PowerPage.module.css";

const PowerPage = () => (
<div className={styles.home}>
    <h1>Power Yoga Flow Sequences</h1>

    <div className="power1">
    <h3>Warm-Up - Section 1</h3>
    <h3>Timing: Section ends 15 minutes into class.</h3>
    <p>TABLETOP, CAT/COW,</p>
    <p>BIRDDOG R/L</p>
    <p>
        DOWNWARD DOG, Step-up, Half Lift, Forward Fold, Mountain, Forward Fold,
        Walk Hand to High Plank
    </p>
    <p>
        Flow - From High Plank: belly pulled in, legs squeezed, elbows in tight
        to body, exhale as you slowly lower down to a hover. Inhale, shoulders
        roll back and down for updog, push back to downward dog.
    </p>
    <p>High-Lunge, Hands Heart Center, Open Arm Twist, Flow</p>
    <p>W1, W2, RV, W2, Flow</p>
    </div>

    <div className="power2">
    <h3>Standing & Balancing Series - Section 2</h3>
    <h3>Timing: Section ends 30 minutes into class.</h3>
    <p>CRESENT MOON R/L, Backward Bend, Forward Fold</p>
    <p>AWKWARD POSE</p>
    <p>EAGLE to CHAIR w/ Twist</p>
    <p>STANDING HAND TO BIG TOE R/L</p>
    <p>STANDING FOREHEAD TO KNEE W/ AIRPLANE R/L </p>
    <p>STANDING BOW</p>
    <p>BREAK: 30-45 SECONDS</p>
    </div>

    <div className="power3" />
    <h3>Flows - Section 3</h3>
    <h3>Timing: Section ends 45 minutes into class.</h3>

    {/* <div className="boxPosition" />
        <div className="box" /> */}
    

    <div className="power4">
    <h3>Floor Series - Section 4</h3>
    <h3>Timing: Section ends 60 minutes into class.</h3>
    <p>COBRA</p>
    <p>AIRPLANE/LOTUS to Snake</p>
    <p>FLOOR BOW</p>
    <p>OPEN CHILD'S POSE</p>
    <p>CAMEL</p>
    <p>CLOSED CHILD'S POSE</p>
    <p>RABBIT</p>
    <p>TORTOISE</p>
    <p>FIXED FIRM</p>
    <p>Option: BRIDGE or WHEEL</p>
    <p>Option: FROG</p>
    <p>SEATED FORWARD FOLD</p>
    <p>INVERSION</p>
    <p>WIND REMOVING with TWIST</p>
    <h3>Savasana</h3>
    </div>
</div>
);

export default PowerPage;