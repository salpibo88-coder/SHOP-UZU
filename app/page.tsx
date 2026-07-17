"use client";
import { useState } from "react";
import Loging from "./components/Card/Loging";
import Formcard from "./components/Card/Formcard";
import Text from "./components/Card/Text";
import Topic from "./components/Card/Topic";
import Payment from "./components/Card/Payment";
import Qr from "./components/Card/Qr";
import Detail from "./components/Card/Detail";
import Home from "./components/textmenu/Home";
import About from "./components/textmenu/About";
import Contact from "./components/textmenu/Contact";
import Services from "./components/textmenu/Services";
import Car from "./components/BeeMenu/Car";
import Motobike from "./components/BeeMenu/Motobike";
import Truck from "./components/BeeMenu/Truck";
import Bicycle from "./components/BeeMenu/Bicycle";
import Drink from "./components/BeeMenu/Drink";
import Fruit from "./components/BeeMenu/Fruit";
import Sitting from "./components/BeeMenu/Sitting";
import Browes from "./components/Browes/Browes";
//  import Dashboard from "./components/Dashboard/Dashboard";
import LogoTranslate from "./components/LogoTranslate/LogoTranslate";
import Accessories from "./components/BeeMenu/Accessories";
import BottomNav from "./components/BottomNav";


export type AppPage =
  | "login" | "shop" | "payment" | "qr" | "detail"
  | "home" | "about" | "contact" | "services"
  | "Car" | "Motobike" | "Truck" | "Bicycle" | "Accessories"
  | "Drink" | "Fruit" | "Sitting" | "browes" | "dashboard"|"Logotranslate";

export interface PaymentData {
  firstName: string;
  lastName: string;
  cardNumber: string;
  exp: string;
  cvc: string;
  method: string;
}

export default function Page() {
  const [page, setPage] = useState<AppPage>("login");
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  const nav = (p: string) => setPage(p as AppPage);

  const sideNav = (item: string) => {
    const map: Record<string, AppPage> = {
      car:         "Car",
      motorbike:   "Motobike",
      truck:       "Truck",
      bicycle:     "Bicycle",
      accessories: "Accessories",
      drink:       "Drink",
      fruit:       "Fruit",
      sitting:     "Sitting",
    };
    const target = map[item.toLowerCase()];
    if (target) setPage(target);
  };

  const withNav = (component: React.ReactNode) => (
    <>
      <Formcard onBuy={() => setPage("payment")} onNav={nav} onSideNav={sideNav} onTranslate={() => setPage("Logotranslate")} />
      {component}
    </>
  );

  let content: React.ReactNode;

  if (page === "login")   content = <Loging onSuccess={() => setPage("shop")} />;
  else if (page === "payment") content = <Payment onSuccess={(data) => { setPaymentData(data); setPage("qr"); }} onBack={() => setPage("shop")} />;
  else if (page === "qr")      content = <Qr onDetail={() => setPage("detail")} onBack={() => setPage("shop")} />;
  else if (page === "detail")  content = <Detail data={paymentData} onBack={() => setPage("shop")} />;
  else if (page === "browes")      content = <Browes onBuy={() => setPage("payment")} onBack={() => setPage("shop")} />;
  // else if (page === "dashboard")   content = <Dashboard onBack={() => setPage("shop")} />;
  else if (page === "Logotranslate") content = <LogoTranslate onBack={() => setPage("shop")} />;
  else if (page === "Car")         content = withNav(<Car onBuy={() => setPage("payment")} />);
  else if (page === "Motobike")    content = withNav(<Motobike onBuy={() => setPage("payment")} />);
  else if (page === "Truck")       content = withNav(<Truck onBuy={() => setPage("payment")} />);
  else if (page === "Bicycle")     content = withNav(<Bicycle onBuy={() => setPage("payment")} />);
  else if (page === "Accessories") content = withNav(<Accessories onBuy={() => setPage("payment")} />);
  else if (page === "Drink")       content = withNav(<Drink onBuy={() => setPage("payment")} />);
  else if (page === "Fruit")       content = withNav(<Fruit onBuy={() => setPage("payment")} />);
  else if (page === "Sitting")     content = withNav(<Sitting onBuy={() => setPage("payment")} />);
  else if (page === "home")        content = withNav(<Home onShop={() => setPage("shop")} />);
  else if (page === "about")       content = withNav(<About />);
  else if (page === "contact")     content = withNav(<Contact />);
  else if (page === "services")    content = withNav(<Services />);
  else {
    // shop (default)
    content = (
      <div>
        <Formcard onBuy={() => setPage("payment")} onNav={nav} onSideNav={sideNav} onTranslate={() => setPage("Logotranslate")} />
        <Text onBrowse={() => setPage("browes")} />
        <Topic onBuy={() => setPage("payment")} />
      </div>
    );
  }

  return (
    <>
      {content}
      <BottomNav onNav={nav} />
    </>
  );
}
