import CountUp from "react-countup";

import { Container } from "../components/utils";
import Banner from "../layouts/Banner";
import Nav from "../layouts/Nav";

import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Nav />

            <Banner />

            <section className="px-4 py-24 mx-auto max-w-7xl">
                <div className="w-full mx-auto md:w-5/6">
                    <div className="text-left md:text-center">
                        <p className="mb-8 text-3xl font-bold tracking-widest text-purple-80">
                            智能化决策为您所用
                        </p>
                        <h1 className="mb-10 text-lg italic font-thin text-gray-800 md:leading-snug md:text-3xl">
                            智能化决策的AI技术，展现可视化和自动化的装载优化，在现代航空物流中具有关键性的地位，可大幅提升装载过程的效率和准确性。我们在信息技术和人工智能领域的最新研究成果，将「组合优化」方法实际应用于现实环境。这不仅是基于过去成功案例积累的宝贵经验，同时也是在持续创新的推动下，不断追求更高水平的效能和成果
                        </h1>
                    </div>
                    <div className="flex items-center justify-start md:justify-center">
                        <div className="avatar">
                            <img src="/images/ro-1.jpeg" alt="Photo of Praveen Juge" />
                        </div>
                        <div className="ml-4">
                            <p className="mb-1 text-xs font-semibold tracking-widest text-gray-800 uppercase">
                                Praveen Juge
                            </p>
                            <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                                CEO, Birds
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full xl:w-1/2">
                    <img
                        src="/images/global-payment-img.png"
                        className="h-auto object-contain object-center align-middle mt-16 xl:mt-0"
                        alt=""
                    />
                </div>

                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            可靠性的挑战
                        </h3>
                        <ul>
                            <li>出口及转口的货物尺寸不一,货型亦不尽相同,需考虑货物的优先级</li>
                            <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                            <li>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</li>
                        </ul>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            安全性的挑战
                        </h3>
                        <ul>
                            <li>人工智能 ( AI ) 不是口号，而是解决特定业务问题的工具</li>
                            <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                            <li>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</li>
                        </ul>
                    </div>
                </div>
            </Container>

            <div className="wow fadeInUp text-center text-indigo-900 space-y-8 mt-28 mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    通过集成的协作体验，优化您的工作
                </h1>
            </div>

            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-1.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            SkyLoad iQ
                        </h3>
                        <p className="max-w-lg">
                            航空公司的配载规划人员透过直观的3D图形,能够清楚地了解飞机货舱内各个ULD的搭载位置、货物装载密度以及重量分布等关键信息,查看您的飞机还剩下多少个舱位,快速掌握舱位的销售报价，使决策者能够更准确地制定装载计划和进行必要的调整，同时最大化地利用飞机货舱的舱位和重量限制。
                        </p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-2.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            SkyCube iQ
                        </h3>
                        <p className="max-w-lg">
                            协助GHA、GSA、以及航空货运代理,进一步提升作业效率并确保货物装载质量。对于包机可快速制作包机的装载方案与报价,货站的组板装载、货代的提单预订条件,进行货物量的精准预测,自动进行装载空间的优化计算,快速准确地估算所需的ULD类型和数量,以确保每个ULD的使用效益最大化。
                        </p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-3.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            SkyOptimizer
                        </h3>
                        <p className="max-w-lg">
                            SkyOptimizer考虑货物的总重量和体积不超过飞机的容量,同时最大程度地利用舱位的空间。我们提供与外部系统的数据接口,可以灵活的使用SkyOptimizerAPI的功能来满足与各种系统数据接口的开发需求。例如:与企业内部管理系统的数据接口以及将SkyOptimizer集成到您的系统中。
                        </p>
                    </div>
                </div>
            </Container>

            <div className="wow fadeInUp text-center text-indigo-900 space-y-8 mt-28 mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    是什么让我们与众不同
                </h1>
            </div>
            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full xl:w-1/2">
                    <img
                        src="/images/global-payment-img.png"
                        className="h-auto object-contain object-center align-middle mt-16 xl:mt-0"
                        alt=""
                    />
                </div>

                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            可靠性的挑战
                        </h3>
                        <ul>
                            <li>出口及转口的货物尺寸不一,货型亦不尽相同,需考虑货物的优先级</li>
                            <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                            <li>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full xl:w-1/2">
                    <img
                        src="/images/global-payment-img.png"
                        className="h-auto object-contain object-center align-middle mt-16 xl:mt-0"
                        alt=""
                    />
                </div>

                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            可靠性的挑战
                        </h3>
                        <ul>
                            <li>出口及转口的货物尺寸不一,货型亦不尽相同,需考虑货物的优先级</li>
                            <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                            <li>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full xl:w-1/2">
                    <img
                        src="/images/global-payment-img.png"
                        className="h-auto object-contain object-center align-middle mt-16 xl:mt-0"
                        alt=""
                    />
                </div>

                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            可靠性的挑战
                        </h3>
                        <ul>
                            <li>出口及转口的货物尺寸不一,货型亦不尽相同,需考虑货物的优先级</li>
                            <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                            <li>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</li>
                        </ul>
                    </div>
                </div>
            </Container>

            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full xl:w-1/2">
                    <img
                        src="/images/global-payment-img.png"
                        className="h-auto object-contain object-center align-middle mt-16 xl:mt-0"
                        alt=""
                    />
                </div>

                <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-1 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            可靠性的挑战
                        </h3>
                        <ul>
                            <li>出口及转口的货物尺寸不一,货型亦不尽相同,需考虑货物的优先级</li>
                            <li>空运货物进仓来源、时效、不同机型之限重及作业场地因素</li>
                            <li>精算货物堆叠规则及效益评估，增进班机的 ULD 利用效率</li>
                        </ul>
                    </div>
                </div>
            </Container>

            {/* <div
                className="mt-28 pt-10 md:pt-28 pb-52 space-y-8 text-center text-white bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('/images/our-solutions-bg.png')" }}
            >
                <h3 className="wow fadeInUp text-xl md:text-2xl text-green-400 font-bold">
                    High speeds. Low fees. No hassle.
                </h3>
                <h1 className="wow fadeInUp text-3xl md:text-4xl xl:text-6xl font-bold">
                    All Your Payments In <br className="hidden lg:block" /> One Place
                </h1>
                <p className="wow fadeInUp text-white font-medium text-opacity-80 text-sm md:text-base">
                    Get used to low fees and great exchange rates on international money <br />{" "}
                    transfers.Expand your business worldwide
                </p>
            </div> */}

            <div className="wow fadeInUp text-center text-indigo-900 space-y-8 mt-28 mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    智能超群的运算力
                </h2>
                <p>
                    装货计算能力是装柜软件最基本的要求,即使拥有再多的功能,计算结果不好,也是无法达到实质效用。SkyLoadiQ不但拥有强大的功能可以满足您实际的飞机配载、货物打板作业需求,快速、稳定以及坚强的计算能力更是我们长期以来所坚持、不断研发突破并且引以自豪的利器。
                </p>
            </div>
            <Container className="wow fadeInUp relative">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white border border-gray-200 border-opacity-50 shadow-2xl rounded-xl">
                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600">
                            <CountUp end={50} />+
                        </h1>
                        <p className="text-sm lg:text-base">Supported Currencies</p>
                    </div>

                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600">
                            <CountUp end={100} />+
                        </h1>
                        <p className="text-sm lg:text-base">Available Countries</p>
                    </div>

                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600">
                            <CountUp end={70} />+
                        </h1>
                        <p className="text-sm lg:text-base">Payment Methods</p>
                    </div>

                    <div className="text-center py-10 lg:py-16 space-y-3 text-indigo-900 font-medium">
                        <h1 className="text-5xl lg:text-6xl font-semibold text-indigo-600">
                            <CountUp end={7} />/<CountUp end={24} />+
                        </h1>
                        <p className="text-sm lg:text-base">Support Team</p>
                    </div>
                </div>
            </Container>
            <Container className="wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-indigo-900">
                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-1.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            SkyLoad iQ
                        </h3>
                        <p className="max-w-lg">
                            航空公司的配载规划人员透过直观的3D图形,能够清楚地了解飞机货舱内各个ULD的搭载位置、货物装载密度以及重量分布等关键信息,查看您的飞机还剩下多少个舱位,快速掌握舱位的销售报价，使决策者能够更准确地制定装载计划和进行必要的调整，同时最大化地利用飞机货舱的舱位和重量限制。
                        </p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-2.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            SkyCube iQ
                        </h3>
                        <p className="max-w-lg">
                            协助GHA、GSA、以及航空货运代理,进一步提升作业效率并确保货物装载质量。对于包机可快速制作包机的装载方案与报价,货站的组板装载、货代的提单预订条件,进行货物量的精准预测,自动进行装载空间的优化计算,快速准确地估算所需的ULD类型和数量,以确保每个ULD的使用效益最大化。
                        </p>
                    </div>

                    <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/global-payment-icon-3.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            SkyOptimizer
                        </h3>
                        <p className="max-w-lg">
                            SkyOptimizer考虑货物的总重量和体积不超过飞机的容量,同时最大程度地利用舱位的空间。我们提供与外部系统的数据接口,可以灵活的使用SkyOptimizerAPI的功能来满足与各种系统数据接口的开发需求。例如:与企业内部管理系统的数据接口以及将SkyOptimizer集成到您的系统中。
                        </p>
                    </div>
                </div>
            </Container>

            <div className="wow fadeInUp text-center text-indigo-900 space-y-8 mt-28 mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    他们信任我们
                </h2>
            </div>

            {/* <Container className="-mt-[150px] wow fadeInUp">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/our-solutions-icon-1.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">Payments</h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>

                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/our-solutions-icon-2.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            Collections
                        </h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>

                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/our-solutions-icon-3.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            Conversions
                        </h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>

                    <div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
                        <div className="flex items-center justify-center">
                            <img src="/images/our-solutions-icon-4.png" alt="" />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
                            Global Account
                        </h3>
                        <p className="max-w-lg text-lg text-indigo-900">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.
                        </p>
                    </div>
                </div>

                <div className="flex items-center flex-col-reverse  lg:flex-row space-x-16 mt-24">
                    <img
                        src="/images/app-download-img.png"
                        className="w-full lg:w-1/2 mt-8 lg:mt-0 object-cover object-center"
                        alt=""
                    />

                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="text-indigo-900 space-y-8 mt-28">
                            <h4 className="text-xl text-indigo-600 lg:text-2xl font-bold">
                                App Download
                            </h4>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                                Fast, Secure Money <br className="hidden lg:block" /> Transfers
                            </h1>

                            <p className="text-sm sm:text-base">
                                Access your account via your mobile phone. View balance, transfer{" "}
                                <br /> funds, view transactions wherever you are.
                            </p>
                        </div>

                        <div className="space-y-5 text-indigo-900">
                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt="" />
                                <p>Login with fingerprint or Face ID.</p>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt="" />
                                <p>Simple few Taps to send money.</p>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt="" />
                                <p>View transaction history.</p>
                            </div>

                            <div className="flex items-center space-x-3 lg:space-x-5">
                                <img src="/images/check.png" alt="" />
                                <p>Get instant App notifications.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <button className="transition-all duration-300 hover:shadow-xl">
                                <img src="/images/GooglePlay-btn.png" alt="" />
                            </button>

                            <button className="transition-all duration-300 hover:shadow-xl">
                                <img src="/images/apple-btn.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </Container> */}

            <Footer />
        </div>
    );
};

export default Home;
