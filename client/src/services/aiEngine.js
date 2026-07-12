export function analyzeEnterprise() {

    const assets =
        JSON.parse(localStorage.getItem("assets")) || [];

    const employees =
        JSON.parse(localStorage.getItem("employees")) || [];

    const maintenance =
        JSON.parse(localStorage.getItem("maintenance")) || [];

    const bookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

    const departments =
        JSON.parse(localStorage.getItem("departments")) || [];

    const assignedAssets =
        assets.filter(asset => asset.status === "Assigned");

    const availableAssets =
        assets.filter(asset => asset.status === "Available");

    const maintenanceAssets =
        assets.filter(asset => asset.status === "Maintenance");

    const utilization =
        assets.length === 0
            ? 0
            : Math.round((assignedAssets.length / assets.length) * 100);

    const maintenanceRate =
        assets.length === 0
            ? 0
            : Math.round((maintenanceAssets.length / assets.length) * 100);

    const employeeCoverage =
        employees.length === 0
            ? 100
            : Math.round((assignedAssets.length / employees.length) * 100);

    const recommendations = [];

    if (availableAssets.length > 3) {
        recommendations.push(
            "Several assets are idle. Consider reallocating them."
        );
    }

    if (maintenanceAssets.length > 0) {
        recommendations.push(
            "Some assets require maintenance."
        );
    }

    if (employees.length > assets.length) {
        recommendations.push(
            "Purchase additional devices for employees."
        );
    }

    if (utilization > 85) {
        recommendations.push(
            "Excellent asset utilization."
        );
    }

    if (recommendations.length === 0) {
        recommendations.push(
            "Enterprise resources are balanced."
        );
    }

    return {

        totalAssets: assets.length,

        totalEmployees: employees.length,

        totalDepartments: departments.length,

        totalBookings: bookings.length,

        totalMaintenance: maintenance.length,

        assignedAssets: assignedAssets.length,

        availableAssets: availableAssets.length,

        maintenanceAssets: maintenanceAssets.length,

        utilization,

        maintenanceRate,

        employeeCoverage,

        recommendations

    };

}