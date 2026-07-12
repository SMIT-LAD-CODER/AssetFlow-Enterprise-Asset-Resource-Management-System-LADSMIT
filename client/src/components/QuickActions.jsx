function QuickActions() {
    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Quick Actions</h2>

            <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
                <button>Add Asset</button>
                <button>Assign Asset</button>
                <button>Book Asset</button>
                <button>Maintenance Request</button>
            </div>
        </div>
    );
}

export default QuickActions;