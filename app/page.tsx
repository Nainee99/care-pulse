import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

interface SearchParamProps {
  searchParams: { admin?: string };
}

const Home = ({ searchParams }: SearchParamProps) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-[496px]">
          <Image
            src="/assets/icons/logo-full.svg"
            height={40}
            width={150}
            alt="CarePluse logo"
            className="mb-8"
          />

          <PatientForm />

          <div className="text-14-regular mt-8 flex justify-between">
            <p className="text-dark-600">© 2024 CarePluse</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="Patient onboarding"
        className="hidden h-screen w-1/2 object-cover lg:block"
      />
    </div>
  );
};

export default Home;
