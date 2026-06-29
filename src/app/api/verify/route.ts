import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const certificateId = searchParams.get("certificateId");

    if (!certificateId) {
      return NextResponse.json(
        { error: "Certificate ID is required." },
        { status: 400 }
      );
    }

    // Call the shared backend API (Internships Portal)
    const backendUrl = process.env.NEXT_PUBLIC_INTERNSHIPS_URL || "http://localhost:3000";
    const backendRes = await fetch(`${backendUrl}/api/verify/${encodeURIComponent(certificateId)}`, {
        cache: 'no-store'
    });
    
    let data;
    try {
        data = await backendRes.json();
    } catch (e) {
        return NextResponse.json(
            { success: false, error: "Backend is not available." },
            { status: 502 }
        );
    }

    if (backendRes.ok && data.valid) {
      const cert = data.certificate;
      return NextResponse.json({
        success: true,
        data: {
          certificateId: cert.certificateNumber,
          studentName: cert.studentName,
          program: cert.degree ? `${cert.degree}` : cert.internshipTitle,
          technologyDomain: cert.domain,
          projectAssigned: cert.internshipTitle || "Live Government Project",
          batchName: "WBL Cohort",
          internshipDuration: cert.duration,
          startDate: "Refer to Certificate",
          completionDate: "Refer to Certificate",
          issueDate: cert.issueDate ? new Date(cert.issueDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : "N/A",
          certificateStatus: "Active",
          verificationStatus: "Verified",
          mentorName: cert.centre || "Assigned Mentor",
          issuedBy: "Centre for Systems Development of Advanced Computing (CSDAC)",
          certificateNumber: cert.certificateNumber,
        }
      }, { status: 200 });
    } else {
      return NextResponse.json(
        { success: false, error: data.message || "Certificate not found." },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
