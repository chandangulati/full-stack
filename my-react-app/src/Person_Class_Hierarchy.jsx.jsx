import React from "react";
import "./App.css";

// Base class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getRole() {
        return "Person";
    }

    getInfo() {
        return `${this.name}, ${this.age} years old`;
    }
}

// Student subclass
class Student extends Person {
    constructor(name, age, rollNo, course) {
        super(name, age); // super: calls Person constructor
        this.rollNo = rollNo;
        this.course = course;
    }

    getRole() {
        return "Student";
    }

    getInfo() {
        return `${super.getInfo()} • Roll no: ${this.rollNo} • Course: ${this.course}`;
    }
}

// Teacher subclass
class Teacher extends Person {
    constructor(name, age, subject, experience) {
        super(name, age);
        this.subject = subject;
        this.experience = experience; // years
    }

    getRole() {
        return "Teacher";
    }

    getInfo() {
        return `${super.getInfo()} • Subject: ${this.subject} • Exp: ${this.experience} yrs`;
    }
}

// React component to display any Person (polymorphism)
function PersonCard({ person }) {
    const isStudent = person instanceof Student;
    const isTeacher = person instanceof Teacher;

    return (
        <div style={styles.card}>
            <div style={styles.roleBadge}>
                {person.getRole()}
            </div>
            <h2 style={styles.name}>{person.name}</h2>
            <p style={styles.meta}>Age: {person.age}</p>
            <p style={styles.info}>{person.getInfo()}</p>

            {isStudent && (
                <p style={styles.extra}>
                    Status: Full-time learner
                </p>
            )}

            {isTeacher && (
                <p style={styles.extra}>
                    Status: Faculty member
                </p>
            )}
        </div>
    );
}

function PersonApp() {
    // Create instances of classes
    const people = [
        new Person("Alex Johnson", 30),
        new Student("Rahul Sharma", 20, "CS-101", "B.E. CSE"),
        new Student("Priya Verma", 21, "CS-115", "B.E. CSE"),
        new Teacher("Anita Gupta", 40, "Full Stack Development", 12),
        new Teacher("Rohan Mehta", 35, "Data Structures", 8),
    ];

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Person Class Hierarchy</h1>
                    <p style={styles.subtitle}>
                        Demonstration of ES6 classes, inheritance, method overriding, and polymorphism in React.
                    </p>
                </header>

                <section style={styles.grid}>
                    {people.map((p, index) => (
                        <PersonCard key={index} person={p} />
                    ))}
                </section>
            </div>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        margin: 0,
        padding: 24,
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    },
    container: {
        maxWidth: 960,
        width: "100%",
        background: "#020617",
        borderRadius: 16,
        padding: 24,
        boxShadow: "0 24px 60px rgba(15,23,42,0.8)",
        color: "#e5e7eb",
    },
    header: {
        marginBottom: 24,
    },
    title: {
        margin: 0,
        fontSize: 28,
        fontWeight: 700,
    },
    subtitle: {
        marginTop: 8,
        marginBottom: 0,
        fontSize: 14,
        color: "#9ca3af",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 16,
    },
    card: {
        background: "#020617",
        borderRadius: 12,
        padding: 16,
        border: "1px solid #1f2937",
    },
    roleBadge: {
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 600,
        background: "#1d4ed8",
        color: "#e5e7eb",
        marginBottom: 8,
    },
    name: {
        margin: "0 0 4px 0",
        fontSize: 18,
        fontWeight: 600,
    },
    meta: {
        margin: "0 0 6px 0",
        fontSize: 13,
        color: "#9ca3af",
    },
    info: {
        margin: "0 0 8px 0",
        fontSize: 14,
    },
    extra: {
        margin: 0,
        fontSize: 13,
        color: "#a5b4fc",
    },
};

export default PersonApp;

