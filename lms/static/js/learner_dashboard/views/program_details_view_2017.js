(function(define) {
    'use strict';

    define(['backbone',
            'jquery',
            'underscore',
            'gettext',
            'edx-ui-toolkit/js/utils/html-utils',
            'js/learner_dashboard/collections/course_card_collection',
            'js/learner_dashboard/views/program_header_view',
            'js/learner_dashboard/views/collection_list_view',
            'js/learner_dashboard/views/course_card_view',
            'js/learner_dashboard/views/program_details_sidebar_view',
            'text!../../../templates/learner_dashboard/program_details_view.underscore'
           ],
         function(
             Backbone,
             $,
             _,
             gettext,
             HtmlUtils,
             CourseCardCollection,
             HeaderView,
             CollectionListView,
             CourseCardView,
             SidebarView,
             pageTpl
         ) {
             return Backbone.View.extend({
                 el: '.js-program-details-wrapper',

                 tpl: HtmlUtils.template(pageTpl),

                 data:
                    {
                      "programData": {
                        "credit_backing_organizations": [
                          {
                            "logo_image_url": "https://www.edx.org/sites/default/files/school/image/logo/iimb-200x101.png",
                            "description": "<p>Established in 1973, the Indian Institute of Management, Bangalore is one of the top management schools in India. We build leaders through holistic, transformative and innovative education.</p>\n<p>We are known for excellence in both teaching and research, and our alumni are leaders in business, government and civil society across the globe. We collaborate with over a hundred leading management schools in several countries on research initiatives and student and faculty exchange programs. The <em>Financial Times</em> has rated our doctoral program in the top fifty globally. Eduniversal, Paris, has ranked us the best business school in Central Asia.</p>\n<p>We offer long-duration programs, executive education and specialized courses in areas such as entrepreneurship and public policy. We believe in the disruptive power of technology and are committed to leveraging digital technology to make high quality management education accessible to everyone across the globe. We will launch MOOCs on topics ranging from core management subjects to advanced and specialized offerings.</p>",
                            "tags": [
                              "partner"
                            ],
                            "uuid": "c2e6b3f5-9c1f-41f0-b692-f2173d05a256",
                            "homepage_url": null,
                            "key": "IIMBx",
                            "certificate_logo_image_url": "https://edxuploads.s3.amazonaws.com/organization_logos/logo-iimbx.png",
                            "marketing_url": "https://www.edx.org/school/iimbx",
                            "name": "Indian Institute of Management, Bangalore"
                          }
                        ],
                        "subtitle": "Learn how to become a successful entrepreneur and gain the skills needed to develop, organize and manage your own business.",
                        "overview": "<p>Are you innovative, have a new business idea or hopes of becoming your own CEO? \r\n\r\n<p>For years we believed that entrepreneurs were born with innate innovation skills, but now we know entrepreneurship can be taught.\r\n\r\n<p>In this Entrepreneurship MicroMasters Program, you will learn how to become an entrepreneur and gain the management skills needed to make your venture successful. You will gain skills in finance, accounting, marketing, and people management and learn what it takes to manage a business.  \r\n\r\n<p>This MicroMasters Program will benefit not only aspiring and current entrepreneurs, but also those who are in companies and would like to engage in intrapreneurial activities.\r\n",
                        "weeks_to_complete": 5,
                        "corporate_endorsements": [
                          {
                            "corporation_name": "Infosys Technologies",
                            "image": null,
                            "individual_endorsements": [
                              {
                                "quote": "The world is full of entrepreneurs, each with a potentially innovative business idea. What they need is the right skill set to ensure that they stay on track to set up and grow their ventures. This MicroMasters Programme from IIMBx is aimed to do just that and I’m sure that thousands of entrepreneurs will acquire the right armoury to transform their ideas into new ventures. The opportunity to incubate at NSRCEL and benefit from the entrepreneurial ecosystem at IIM Bangalore is an added plus.",
                                "endorser": {
                                  "family_name": "Raghavan",
                                  "uuid": "6d400390-aaa8-469f-9546-89fb42edfa68",
                                  "bio": "",
                                  "profile_image": {},
                                  "profile_image_url": "",
                                  "given_name": "N S",
                                  "urls": {
                                    "blog": null,
                                    "twitter": null,
                                    "facebook": null
                                  },
                                  "position": {
                                    "organization_name": "",
                                    "title": "Co-founder, Infosys Technologies"
                                  },
                                  "works": [],
                                  "slug": "n-s-raghavan"
                                }
                              }
                            ],
                            "statement": " "
                          }
                        ],
                        "video": null,
                        "max_hours_effort_per_week": 6,
                        "transcript_languages": [
                          "hi",
                          "en-us"
                        ],
                        "staff": [
                          {
                            "family_name": "Mishra",
                            "uuid": "24685191-9cb3-4a12-ae92-79493ace518d",
                            "bio": "Dr. Ashis Mishra is a faculty member in the Marketing Area at the Indian Institute of Management Bangalore (IIMB). Dr. Mishra teaches marketing management and retail management. His area of research involves Retail Productivity Analysis, Retail Atmospherics and Retail Consumer Behaviour. He has successfully developed and applied many quantitative models and business model frameworks in solving marketing/retailing-related problems. He has published over 10 papers in various national and international journals of repute. His current projects include ‘A Dynamic Model for Forecasting in Indian Retail Sector’, ‘Store Atmospherics as a Tool for Retail Productivity’ and ‘Technographic Segmentation of Indian Retail Consumers.’",
                            "profile_image": {},
                            "profile_image_url": "https://www.edx.org/sites/default/files/person/image/ashismishra.jpg",
                            "given_name": "Ashis",
                            "urls": {
                              "blog": null,
                              "twitter": null,
                              "facebook": null
                            },
                            "position": {
                              "organization_name": "IIM Bangalore",
                              "title": "Assistant Professor, Marketing"
                            },
                            "works": [],
                            "slug": "ashis-mishra"
                          },
                          {
                            "family_name": "Narasimhan",
                            "uuid": "bfb44e45-8f66-478f-b30e-99e7e365865f",
                            "bio": "Professor MS Narasimhan teaches courses on Management Accounting, Financial Accounting, Corporate Finance and Investments. His areas of interest include Management Accounting, Corporate Finance and Capital Markets. He is a member of the Institute of Cost and Works Accountants of India. He has also completed a study on Corporate Disclosure Practices in India, sponsored under the FIRE project. He has published several articles and research studies in national and international journals and financial newspapers.",
                            "profile_image": {},
                            "profile_image_url": "https://www.edx.org/sites/default/files/person/image/msn_profilepic_110x110.jpg",
                            "given_name": "MS",
                            "urls": {
                              "blog": null,
                              "twitter": null,
                              "facebook": null
                            },
                            "position": {
                              "organization_name": "IIM Bangalore",
                              "title": "Professor"
                            },
                            "works": [],
                            "slug": "ms-narasimhan"
                          },
                          {
                            "family_name": "Bhagavatula",
                            "uuid": "0a12093d-334e-49bb-afc2-ce3fe531239a",
                            "bio": "Prof Suresh is passionate about teaching entrepreneurship and has been associated with NSRCEL (<a href=\"http://www.nsrcel.org\">http://www.nsrcel.org</a>) at Indian Institute of Management Bangalore since 2007 where he has been interacting with many different types of entrepreneurs, but mostly operating within the technology domain. His interest in entrepreneurship has genesis in his formative experiences with helping Women Entrepreneurs help set up micro-ventures in Kenya while pursuing his Masters. These experiences have set him on a life-long pursuit of understanding the determinants of entrepreneurial success, and more importantly entrepreneurial failure. He hails from Vizag, did his Bachelors in Engineering from Shivaji University, pursued a Masters from University of Flensburg, Germany and earned his PhD from Vrije Universiteit, Amsterdam, the Netherlands. At a personal level, he enjoys traveling, knowing more about traditional arts and crafts and biking around the verdant IIM Bangalore campus during his free time!",
                            "profile_image": {},
                            "profile_image_url": "https://www.edx.org/sites/default/files/person/image/sureshbhagavatula_profilepic.jpg",
                            "given_name": "Suresh",
                            "urls": {
                              "blog": null,
                              "twitter": null,
                              "facebook": null
                            },
                            "position": {
                              "organization_name": "IIM Bangalore",
                              "title": "Faculty"
                            },
                            "works": [],
                            "slug": "suresh-bhagavatula"
                          },
                          {
                            "family_name": "Srinivasan",
                            "uuid": "3ee443fd-2dc0-498c-beb1-53aa015e3390",
                            "bio": "<p>Vasanthi Srinivasan is a Professor in the Organizational Behaviour and Human Resource Management Area.  </p>\n<p>Her research interests are in the field of HRM. She has been extensively involved in designing and delivering Leadership Development Programs for Indian and international companies.  </p>\n<p>Her prior experience in offering the MOOC course - <strong>Introduction to People Management</strong> motivates her to effectively harness technology for learning impact.</p>",
                            "profile_image": {},
                            "profile_image_url": "https://www.edx.org/sites/default/files/person/image/hr101x-srnivasan12112015-110x110.png",
                            "given_name": "Vasanthi",
                            "urls": {
                              "blog": null,
                              "twitter": null,
                              "facebook": null
                            },
                            "position": {
                              "organization_name": "IIM Bangalore",
                              "title": "Professor, Organizational Behaviour and Human Resource Management"
                            },
                            "works": [],
                            "slug": "vasanthi-srinivasan"
                          }
                        ],
                        "uuid": "ad0784ed-d5a7-4388-8523-2e4b2047be1d",
                        "title": "Entrepreneurship",
                        "languages": [
                          "en-us"
                        ],
                        "subjects": [
                          {
                            "subtitle": "Learn about economics and finance and more from the best universities and institutions around the world.",
                            "description": "Learn the key macroeconomic and microeconomic indicators and how they drive economic policy and financial decision-making. Explore topics in risk management, pricing models, globalization and more with courses from Caltech, MIT, TsinghuaX and other top institutions worldwide.",
                            "card_image_url": "https://www.edx.org/sites/default/files/subject/image/card/economics-finance.jpg",
                            "banner_image_url": "https://www.edx.org/sites/default/files/finance-1440x210.jpg",
                            "slug": "economics-finance",
                            "name": "Economics & Finance"
                          },
                          {
                            "subtitle": "Learn about business and management and more from the best universities and institutions around the world.",
                            "description": "<p>Online courses cover the core concepts in all areas of business including entrepreneurship, economics, finance, marketing and product development. Learn about business contracts, supply chain management, statistical analysis and much more with online courses from Harvard, MIT, Cornell and other top universities.</p>\n<h3>Browse Popular Business and Management Subjects</h3>\n<p><a href=\"/course/subject/business-management/finance\">Finance</a> | <a href=\"/course/subject/business-management/marketing\">Marketing</a> | <a href=\"/course/subject/business-management/accounting\">Accounting</a> | <a href=\"/course/subject/business-management/communications\">Communications</a> | <a href=\"/course/subject/business-management/international-business\">International Business</a> | <a href=\"/course/subject/business-management/risk-management\">Risk Management</a></p>\n<p><a href=\"/course/subject/business-management/innovation-entrepreneurship\">Innovation & Entrepreneurship</a></p>",
                            "card_image_url": "https://www.edx.org/sites/default/files/subject/image/card/business.jpg",
                            "banner_image_url": "https://www.edx.org/sites/default/files/business-and-management-1440x210.jpg",
                            "slug": "business-management",
                            "name": "Business & Management"
                          }
                        ],
                        "individual_endorsements": [],
                        "expected_learning_items": [
                          "To identify and evaluate business opportunities.",
                          "To develop business ideas through customer interactions.",
                          "To use Lean Canvas to document the progress of your venture.",
                          "To employ techniques to overcome risks and make sound business decisions.",
                          "To manage your venture efficiently using toolkits and skills in areas of: accounting, finance, people skills and marketing. "
                        ],
                        "marketing_slug": "iimbx-entrepreneurship",
                        "marketing_url": "https://www.edx.org/micromasters/iimbx-entrepreneurship",
                        "status": "active",
                        "credit_redemption_overview": "<p><strong>How To Earn The MicroMasters Credential</strong><br>\r\nSuccessfully complete and earn a Verified Certificate in all four courses and pass the final comprehensive capstone project (cost of capstone is $249).\r\n\r\n<p><strong>Take Your Credential To The Next Level</strong><br>\r\nEarning this MicroMasters Credential will give you the opportunity to use IIMB’s 3-month long launchpad facility along with mentoring facilities. If you demonstrate potential for significant growth during this period, you could be considered for incubation at IIMB's Incubation Centre: NSRCEL. ",
                        "card_image_url": "https://www.edx.org/sites/default/files/micromasters_entrepreneurship_banner378x225.jpg",
                        "faq": [],
                        "price_ranges": [
                          {
                            "currency": "USD",
                            "max": 150,
                            "total": 600,
                            "min": 150
                          }
                        ],
                        "banner_image": {
                          "small": {
                            "url": "https://dphy0qlkz2ftb.cloudfront.net/media/programs/banner_images/ad0784ed-d5a7-4388-8523-2e4b2047be1d.small.jpg",
                            "width": 435,
                            "height": 145
                          },
                          "large": {
                            "url": "https://dphy0qlkz2ftb.cloudfront.net/media/programs/banner_images/ad0784ed-d5a7-4388-8523-2e4b2047be1d.large.jpg",
                            "width": 1440,
                            "height": 480
                          },
                          "medium": {
                            "url": "https://dphy0qlkz2ftb.cloudfront.net/media/programs/banner_images/ad0784ed-d5a7-4388-8523-2e4b2047be1d.medium.jpg",
                            "width": 726,
                            "height": 242
                          },
                          "x-small": {
                            "url": "https://dphy0qlkz2ftb.cloudfront.net/media/programs/banner_images/ad0784ed-d5a7-4388-8523-2e4b2047be1d.x-small.jpg",
                            "width": 348,
                            "height": 116
                          }
                        },
                        "authoring_organizations": [
                          {
                            "logo_image_url": "https://www.edx.org/sites/default/files/school/image/logo/iimb-200x101.png",
                            "description": "<p>Established in 1973, the Indian Institute of Management, Bangalore is one of the top management schools in India. We build leaders through holistic, transformative and innovative education.</p>\n<p>We are known for excellence in both teaching and research, and our alumni are leaders in business, government and civil society across the globe. We collaborate with over a hundred leading management schools in several countries on research initiatives and student and faculty exchange programs. The <em>Financial Times</em> has rated our doctoral program in the top fifty globally. Eduniversal, Paris, has ranked us the best business school in Central Asia.</p>\n<p>We offer long-duration programs, executive education and specialized courses in areas such as entrepreneurship and public policy. We believe in the disruptive power of technology and are committed to leveraging digital technology to make high quality management education accessible to everyone across the globe. We will launch MOOCs on topics ranging from core management subjects to advanced and specialized offerings.</p>",
                            "tags": [
                              "partner"
                            ],
                            "uuid": "c2e6b3f5-9c1f-41f0-b692-f2173d05a256",
                            "homepage_url": null,
                            "key": "IIMBx",
                            "certificate_logo_image_url": "https://edxuploads.s3.amazonaws.com/organization_logos/logo-iimbx.png",
                            "marketing_url": "https://www.edx.org/school/iimbx",
                            "name": "Indian Institute of Management, Bangalore"
                          }
                        ],
                        "job_outlook_items": [
                          "This MicroMasters Program is meant for Entrepreneurs and therefore, job outlook is endless as learners will gain skills that can be applied to all industries.",
                          "Exciting career opportunities as a CEO, business owner, manager and more!"
                        ],
                        "type": "MicroMasters",
                        "min_hours_effort_per_week": 4,
                        "courses": [
                          {
                            "owners": [
                              {
                                "uuid": "c2e6b3f5-9c1f-41f0-b692-f2173d05a256",
                                "key": "IIMBx",
                                "name": "Indian Institute of Management, Bangalore"
                              }
                            ],
                            "uuid": "e4b830e5-c132-45dc-a026-cd419c7133fc",
                            "title": "DO Your Venture : Entrepreneurship for Everyone",
                            "image": {
                              "src": "https://www.edx.org/sites/default/files/course/image/promoted/iimbx_ep101x_courseimage_378x225.jpg",
                              "height": null,
                              "description": null,
                              "width": null
                            },
                            "key": "IIMBx+EP101x",
                            "course_runs": [
                              {
                                "upgrade_url": null,
                                "image": {
                                  "src": "https://www.edx.org/sites/default/files/course/image/promoted/iimbx_ep101x_courseimage_378x225.jpg",
                                  "height": null,
                                  "description": null,
                                  "width": null
                                },
                                "max_effort": null,
                                "is_enrollment_open": true,
                                "course": "IIMBx+EP101x",
                                "content_language": "en-us",
                                "eligible_for_financial_aid": true,
                                "seats": [
                                  {
                                    "sku": "9DFBA26",
                                    "credit_hours": null,
                                    "price": "0.00",
                                    "currency": "USD",
                                    "upgrade_deadline": null,
                                    "credit_provider": null,
                                    "type": "audit"
                                  },
                                  {
                                    "sku": "F2F222F",
                                    "credit_hours": null,
                                    "price": "150.00",
                                    "currency": "USD",
                                    "upgrade_deadline": "2017-07-20T23:59:00Z",
                                    "credit_provider": null,
                                    "type": "verified"
                                  }
                                ],
                                "course_url": "/courses/course-v1:IIMBx+EP101x+2T2017/",
                                "availability": "Upcoming",
                                "transcript_languages": [
                                  "en-us",
                                  "hi"
                                ],
                                "staff": [
                                  {
                                    "family_name": "Bhagavatula",
                                    "uuid": "0a12093d-334e-49bb-afc2-ce3fe531239a",
                                    "bio": "Prof Suresh is passionate about teaching entrepreneurship and has been associated with NSRCEL (<a href=\"http://www.nsrcel.org\">http://www.nsrcel.org</a>) at Indian Institute of Management Bangalore since 2007 where he has been interacting with many different types of entrepreneurs, but mostly operating within the technology domain. His interest in entrepreneurship has genesis in his formative experiences with helping Women Entrepreneurs help set up micro-ventures in Kenya while pursuing his Masters. These experiences have set him on a life-long pursuit of understanding the determinants of entrepreneurial success, and more importantly entrepreneurial failure. He hails from Vizag, did his Bachelors in Engineering from Shivaji University, pursued a Masters from University of Flensburg, Germany and earned his PhD from Vrije Universiteit, Amsterdam, the Netherlands. At a personal level, he enjoys traveling, knowing more about traditional arts and crafts and biking around the verdant IIM Bangalore campus during his free time!",
                                    "profile_image": {},
                                    "profile_image_url": "https://www.edx.org/sites/default/files/person/image/sureshbhagavatula_profilepic.jpg",
                                    "given_name": "Suresh",
                                    "urls": {
                                      "blog": null,
                                      "twitter": null,
                                      "facebook": null
                                    },
                                    "position": {
                                      "organization_name": "IIM Bangalore",
                                      "title": "Faculty"
                                    },
                                    "works": [],
                                    "slug": "suresh-bhagavatula"
                                  }
                                ],
                                "announcement": null,
                                "end": "2017-08-10T03:30:00Z",
                                "uuid": "c8c103f1-2335-48fb-a6c7-08df91d5aeb0",
                                "title": "Entrepreneurship: DO Your Venture",
                                "certificate_url": null,
                                "enrollment_start": null,
                                "start": "2017-06-22T04:00:00Z",
                                "min_effort": null,
                                "short_description": "Learn a systematic, scientific and iterative process for identifying, evaluating and testing entrepreneurial opportunities.",
                                "hidden": false,
                                "level_type": "Intermediate",
                                "type": "verified",
                                "enrollment_open_date": "Jan 01, 1900",
                                "marketing_url": "https://www.edx.org/course/entrepreneurship-do-venture-iimbx-ep101x-0",
                                "is_course_ended": false,
                                "instructors": [],
                                "full_description": "<p>Are you a student, professional, educator, home-maker or someone who dreams of someday starting your own venture?</p>\n<p>This hands-on, action oriented business and management course will introduce you to a systematic, scientific and an easy process of testing your ideas and opportunities you envision.</p>\n<p>You will learn the “DO your Venture” ideology, which will teach you common paths entrepreneurs take when launching their own venture. You will also learn the tools and techniques for generating ideas and then test your ideas in the field and gather feedback.</p>\n<p>The course will end with a focus on the Lean Canvas business model and effectuation, which is a set of decision-making principles expert entrepreneurs use in situations of uncertainty.</p>",
                                "key": "course-v1:IIMBx+EP101x+2T2017",
                                "enrollment_end": null,
                                "reporting_type": "mooc",
                                "advertised_start": null,
                                "mobile_available": true,
                                "modified": "2017-04-03T12:37:37.480375Z",
                                "is_enrolled": false,
                                "pacing_type": "instructor_paced",
                                "video": {
                                  "src": "http://www.youtube.com/watch?v=wiSZ2RmaNDU",
                                  "image": {
                                    "src": "https://www.edx.org/sites/default/files/course/image/featured-card/iimbx_ep101x_courseimage_318x210.jpg",
                                    "height": null,
                                    "description": null,
                                    "width": null
                                  },
                                  "description": null
                                }
                              },
                              {
                                "upgrade_url": null,
                                "image": {
                                  "src": "https://www.edx.org/sites/default/files/course/image/promoted/iimbx_ep101x_courseimage_378x225.jpg",
                                  "height": null,
                                  "description": null,
                                  "width": null
                                },
                                "max_effort": null,
                                "is_enrollment_open": true,
                                "course": "IIMBx+EP101x",
                                "content_language": "en-us",
                                "eligible_for_financial_aid": true,
                                "seats": [
                                  {
                                    "sku": "A9A665D",
                                    "credit_hours": null,
                                    "price": "0.00",
                                    "currency": "USD",
                                    "upgrade_deadline": null,
                                    "credit_provider": null,
                                    "type": "audit"
                                  },
                                  {
                                    "sku": "2BC3A53",
                                    "credit_hours": null,
                                    "price": "150.00",
                                    "currency": "USD",
                                    "upgrade_deadline": "2017-02-23T23:59:00Z",
                                    "credit_provider": null,
                                    "type": "verified"
                                  }
                                ],
                                "course_url": "/courses/course-v1:IIMBx+EP101x+1T2017/",
                                "availability": "Archived",
                                "transcript_languages": [
                                  "en-us",
                                  "hi"
                                ],
                                "staff": [
                                  {
                                    "family_name": "Bhagavatula",
                                    "uuid": "0a12093d-334e-49bb-afc2-ce3fe531239a",
                                    "bio": "Prof Suresh is passionate about teaching entrepreneurship and has been associated with NSRCEL (<a href=\"http://www.nsrcel.org\">http://www.nsrcel.org</a>) at Indian Institute of Management Bangalore since 2007 where he has been interacting with many different types of entrepreneurs, but mostly operating within the technology domain. His interest in entrepreneurship has genesis in his formative experiences with helping Women Entrepreneurs help set up micro-ventures in Kenya while pursuing his Masters. These experiences have set him on a life-long pursuit of understanding the determinants of entrepreneurial success, and more importantly entrepreneurial failure. He hails from Vizag, did his Bachelors in Engineering from Shivaji University, pursued a Masters from University of Flensburg, Germany and earned his PhD from Vrije Universiteit, Amsterdam, the Netherlands. At a personal level, he enjoys traveling, knowing more about traditional arts and crafts and biking around the verdant IIM Bangalore campus during his free time!",
                                    "profile_image": {},
                                    "profile_image_url": "https://www.edx.org/sites/default/files/person/image/sureshbhagavatula_profilepic.jpg",
                                    "given_name": "Suresh",
                                    "urls": {
                                      "blog": null,
                                      "twitter": null,
                                      "facebook": null
                                    },
                                    "position": {
                                      "organization_name": "IIM Bangalore",
                                      "title": "Faculty"
                                    },
                                    "works": [],
                                    "slug": "suresh-bhagavatula"
                                  }
                                ],
                                "announcement": "2016-09-20T00:00:00Z",
                                "end": "2017-03-02T03:30:00Z",
                                "uuid": "2861873a-7e81-11e6-a8e3-22000bdde520",
                                "title": "Entrepreneurship: DO Your Venture",
                                "certificate_url": null,
                                "enrollment_start": null,
                                "start": "2017-01-05T05:00:00Z",
                                "min_effort": null,
                                "short_description": "Learn a systematic, scientific and iterative process for identifying, evaluating and testing entrepreneurial opportunities.",
                                "hidden": false,
                                "level_type": "Intermediate",
                                "type": "verified",
                                "enrollment_open_date": "Jan 01, 1900",
                                "marketing_url": "https://www.edx.org/course/entrepreneurship-do-venture-iimbx-ep101x",
                                "is_course_ended": true,
                                "instructors": [],
                                "full_description": "<p>Are you a student, professional, educator, home-maker or someone who dreams of someday starting your own venture?</p>\n<p>This hands-on, action oriented business and management course will introduce you to a systematic, scientific and an easy process of testing your ideas and opportunities you envision.</p>\n<p>You will learn the “DO your Venture” ideology, which will teach you common paths entrepreneurs take when launching their own venture. You will also learn the tools and techniques for generating ideas and then test your ideas in the field and gather feedback.</p>\n<p>The course will end with a focus on the Lean Canvas business model and effectuation, which is a set of decision-making principles expert entrepreneurs use in situations of uncertainty.</p>",
                                "key": "course-v1:IIMBx+EP101x+1T2017",
                                "enrollment_end": null,
                                "reporting_type": "mooc",
                                "advertised_start": null,
                                "mobile_available": true,
                                "modified": "2017-04-03T12:37:37.377509Z",
                                "is_enrolled": true,
                                "pacing_type": "instructor_paced",
                                "video": {
                                  "src": "http://www.youtube.com/watch?v=wiSZ2RmaNDU",
                                  "image": {
                                    "src": "https://www.edx.org/sites/default/files/course/image/featured-card/iimbx_ep101x_courseimage_318x210.jpg",
                                    "height": null,
                                    "description": null,
                                    "width": null
                                  },
                                  "description": null
                                }
                              }
                            ]
                          },
                          {
                            "owners": [
                              {
                                "uuid": "c2e6b3f5-9c1f-41f0-b692-f2173d05a256",
                                "key": "IIMBx",
                                "name": "Indian Institute of Management, Bangalore"
                              }
                            ],
                            "uuid": "a0cb0f4f-21d9-4a0a-8386-d1f8e648b526",
                            "title": "Accounting and Finance",
                            "image": {
                              "src": "https://www.edx.org/sites/default/files/course/image/promoted/accounting_and_finance_mooc_for_entrepreneurs_378x225.jpg",
                              "height": null,
                              "description": null,
                              "width": null
                            },
                            "key": "IIMBx+AC104x",
                            "course_runs": [
                              {
                                "upgrade_url": null,
                                "image": {
                                  "src": "https://www.edx.org/sites/default/files/course/image/promoted/accounting_and_finance_mooc_for_entrepreneurs_378x225.jpg",
                                  "height": null,
                                  "description": null,
                                  "width": null
                                },
                                "max_effort": null,
                                "is_enrollment_open": true,
                                "course": "IIMBx+AC104x",
                                "content_language": "en-us",
                                "eligible_for_financial_aid": true,
                                "seats": [
                                  {
                                    "sku": "CC3A5AF",
                                    "credit_hours": null,
                                    "price": "0.00",
                                    "currency": "USD",
                                    "upgrade_deadline": null,
                                    "credit_provider": null,
                                    "type": "audit"
                                  },
                                  {
                                    "sku": "8924C20",
                                    "credit_hours": null,
                                    "price": "150.00",
                                    "currency": "USD",
                                    "upgrade_deadline": "2017-06-01T23:58:00Z",
                                    "credit_provider": null,
                                    "type": "verified"
                                  }
                                ],
                                "course_url": "/courses/course-v1:IIMBx+AC104x+1T2017/",
                                "availability": "Current",
                                "transcript_languages": [
                                  "en-us",
                                  "hi"
                                ],
                                "staff": [
                                  {
                                    "family_name": "Narasimhan",
                                    "uuid": "bfb44e45-8f66-478f-b30e-99e7e365865f",
                                    "bio": "Professor MS Narasimhan teaches courses on Management Accounting, Financial Accounting, Corporate Finance and Investments. His areas of interest include Management Accounting, Corporate Finance and Capital Markets. He is a member of the Institute of Cost and Works Accountants of India. He has also completed a study on Corporate Disclosure Practices in India, sponsored under the FIRE project. He has published several articles and research studies in national and international journals and financial newspapers.",
                                    "profile_image": {},
                                    "profile_image_url": "https://www.edx.org/sites/default/files/person/image/msn_profilepic_110x110.jpg",
                                    "given_name": "MS",
                                    "urls": {
                                      "blog": null,
                                      "twitter": null,
                                      "facebook": null
                                    },
                                    "position": {
                                      "organization_name": "IIM Bangalore",
                                      "title": "Professor"
                                    },
                                    "works": [],
                                    "slug": "ms-narasimhan"
                                  }
                                ],
                                "announcement": "2016-09-20T00:00:00Z",
                                "end": "2017-06-22T04:00:00Z",
                                "uuid": "53ec92ad-0f98-4114-b992-a9d249e60424",
                                "title": "Accounting and Finance",
                                "certificate_url": null,
                                "enrollment_start": "2016-07-15T03:30:00Z",
                                "start": "2017-03-16T04:00:00Z",
                                "min_effort": null,
                                "short_description": "Develop financial acumen to manage your business successfully.",
                                "hidden": false,
                                "level_type": "Intermediate",
                                "type": "verified",
                                "enrollment_open_date": "Jul 15, 2016",
                                "marketing_url": "https://www.edx.org/course/accounting-finance-iimbx-ac104x",
                                "is_course_ended": false,
                                "instructors": [],
                                "full_description": "<p>This business course helps you to read and understand financial statements to evaluate how business performance is affected by four fundamental drivers of profitability viz., asset management, cost management, leverage management and tax management. It will also help you to identify areas for improvement.</p>\n<p>The second part of this finance course deals with managing costs. You will learn how to prepare cost sheets, budget and make cost-based decisions.</p>\n<p>The third part of the course provides an overview of financial markets to raise capital of different types. You will develop the ability to prepare and evaluate finances for your business plan and manage working capital.</p>\n<p>The overall objective of the course is to build financial acumen to make you a successful entrepreneur or manager.</p>",
                                "key": "course-v1:IIMBx+AC104x+1T2017",
                                "enrollment_end": null,
                                "reporting_type": "mooc",
                                "advertised_start": null,
                                "mobile_available": false,
                                "modified": "2017-04-03T12:37:16.872184Z",
                                "is_enrolled": false,
                                "pacing_type": "instructor_paced",
                                "video": null
                              }
                            ]
                          },
                          {
                            "owners": [
                              {
                                "uuid": "c2e6b3f5-9c1f-41f0-b692-f2173d05a256",
                                "key": "IIMBx",
                                "name": "Indian Institute of Management, Bangalore"
                              }
                            ],
                            "uuid": "b1e08c5c-4648-4b22-bb22-7b477fcf88d1",
                            "title": "Marketing Management",
                            "image": {
                              "src": "https://www.edx.org/sites/default/files/course/image/promoted/micromasters_marketing_378x225.jpg",
                              "height": null,
                              "description": null,
                              "width": null
                            },
                            "key": "IIMBx+MK102x",
                            "course_runs": [
                              {
                                "upgrade_url": null,
                                "image": {
                                  "src": "https://www.edx.org/sites/default/files/course/image/promoted/micromasters_marketing_378x225.jpg",
                                  "height": null,
                                  "description": null,
                                  "width": null
                                },
                                "max_effort": null,
                                "is_enrollment_open": true,
                                "course": "IIMBx+MK102x",
                                "content_language": "en-us",
                                "eligible_for_financial_aid": true,
                                "seats": [
                                  {
                                    "sku": "15DBBEC",
                                    "credit_hours": null,
                                    "price": "0.00",
                                    "currency": "USD",
                                    "upgrade_deadline": null,
                                    "credit_provider": null,
                                    "type": "audit"
                                  },
                                  {
                                    "sku": "E30E5C3",
                                    "credit_hours": null,
                                    "price": "150.00",
                                    "currency": "USD",
                                    "upgrade_deadline": "2017-06-22T23:58:00Z",
                                    "credit_provider": null,
                                    "type": "verified"
                                  }
                                ],
                                "course_url": "/courses/course-v1:IIMBx+MK102x+1T2017/",
                                "availability": "Starting Soon",
                                "transcript_languages": [
                                  "en-us",
                                  "hi"
                                ],
                                "staff": [
                                  {
                                    "family_name": "Mishra",
                                    "uuid": "24685191-9cb3-4a12-ae92-79493ace518d",
                                    "bio": "Dr. Ashis Mishra is a faculty member in the Marketing Area at the Indian Institute of Management Bangalore (IIMB). Dr. Mishra teaches marketing management and retail management. His area of research involves Retail Productivity Analysis, Retail Atmospherics and Retail Consumer Behaviour. He has successfully developed and applied many quantitative models and business model frameworks in solving marketing/retailing-related problems. He has published over 10 papers in various national and international journals of repute. His current projects include ‘A Dynamic Model for Forecasting in Indian Retail Sector’, ‘Store Atmospherics as a Tool for Retail Productivity’ and ‘Technographic Segmentation of Indian Retail Consumers.’",
                                    "profile_image": {},
                                    "profile_image_url": "https://www.edx.org/sites/default/files/person/image/ashismishra.jpg",
                                    "given_name": "Ashis",
                                    "urls": {
                                      "blog": null,
                                      "twitter": null,
                                      "facebook": null
                                    },
                                    "position": {
                                      "organization_name": "IIM Bangalore",
                                      "title": "Assistant Professor, Marketing"
                                    },
                                    "works": [],
                                    "slug": "ashis-mishra"
                                  }
                                ],
                                "announcement": "2016-09-20T00:00:00Z",
                                "end": "2017-06-29T03:30:00Z",
                                "uuid": "286181a7-7e81-11e6-a8e3-22000bdde520",
                                "title": "Marketing Management",
                                "certificate_url": null,
                                "enrollment_start": null,
                                "start": "2017-04-20T04:00:00Z",
                                "min_effort": null,
                                "short_description": "Learn how to effectively apply marketing management theories and practices through real-world business scenarios.",
                                "hidden": false,
                                "level_type": "Intermediate",
                                "type": "verified",
                                "enrollment_open_date": "Jan 01, 1900",
                                "marketing_url": "https://www.edx.org/course/marketing-management-iimbx-mk102x",
                                "is_course_ended": false,
                                "instructors": [],
                                "full_description": "<p>According to world-renowned management consultant, Peter Drucker, \"Marketing is the only distinguishing and unique function of business…There is only one valid definition of business purpose and that is to create a customer.”</p>\n<p>While the significance of marketing in today’s business world can never be overstated, it is the precise understanding and appreciation of marketing management that needs to be accentuated. Marketing management allows an organization to track, review and analyze their marketing resources and activities.</p>\n<p>In this marketing course, you will learn the fundamentals of marketing management, as you gradually learn advanced theories and applications through real world business examples, illustrations, cases and exercises. You will learn how marketing management tools can be used to increase your customer base, improve customer satisfaction and increase your company’s overall perceived value.</p>\n<p>You will learn how marketing serves as a key element within an organization’s strategy.</p>",
                                "key": "course-v1:IIMBx+MK102x+1T2017",
                                "enrollment_end": null,
                                "reporting_type": "mooc",
                                "advertised_start": null,
                                "mobile_available": false,
                                "modified": "2017-04-03T12:37:54.299027Z",
                                "is_enrolled": false,
                                "pacing_type": "instructor_paced",
                                "video": null
                              }
                            ]
                          },
                          {
                            "owners": [
                              {
                                "uuid": "c2e6b3f5-9c1f-41f0-b692-f2173d05a256",
                                "key": "IIMBx",
                                "name": "Indian Institute of Management, Bangalore"
                              }
                            ],
                            "uuid": "ac75c499-d934-44d4-b87e-2407ea107844",
                            "title": "People Management for Entrepreneurs",
                            "image": {
                              "src": "https://www.edx.org/sites/default/files/course/image/promoted/mm_peoplemanagement_entrepreneurs_378x225.jpg",
                              "height": null,
                              "description": null,
                              "width": null
                            },
                            "key": "IIMBx+HR102x",
                            "course_runs": [
                              {
                                "upgrade_url": null,
                                "image": {
                                  "src": "https://www.edx.org/sites/default/files/course/image/promoted/mm_peoplemanagement_entrepreneurs_378x225.jpg",
                                  "height": null,
                                  "description": null,
                                  "width": null
                                },
                                "max_effort": null,
                                "is_enrollment_open": true,
                                "course": "IIMBx+HR102x",
                                "content_language": "en-us",
                                "eligible_for_financial_aid": true,
                                "seats": [
                                  {
                                    "sku": "33E2A5A",
                                    "credit_hours": null,
                                    "price": "0.00",
                                    "currency": "USD",
                                    "upgrade_deadline": null,
                                    "credit_provider": null,
                                    "type": "audit"
                                  },
                                  {
                                    "sku": "A3366FA",
                                    "credit_hours": null,
                                    "price": "150.00",
                                    "currency": "USD",
                                    "upgrade_deadline": "2017-09-21T23:58:00Z",
                                    "credit_provider": null,
                                    "type": "verified"
                                  }
                                ],
                                "course_url": "/courses/course-v1:IIMBx+HR102x+2T2017/",
                                "availability": "Upcoming",
                                "transcript_languages": [
                                  "en-us",
                                  "hi"
                                ],
                                "staff": [
                                  {
                                    "family_name": "Srinivasan",
                                    "uuid": "3ee443fd-2dc0-498c-beb1-53aa015e3390",
                                    "bio": "<p>Vasanthi Srinivasan is a Professor in the Organizational Behaviour and Human Resource Management Area.  </p>\n<p>Her research interests are in the field of HRM. She has been extensively involved in designing and delivering Leadership Development Programs for Indian and international companies.  </p>\n<p>Her prior experience in offering the MOOC course - <strong>Introduction to People Management</strong> motivates her to effectively harness technology for learning impact.</p>",
                                    "profile_image": {},
                                    "profile_image_url": "https://www.edx.org/sites/default/files/person/image/hr101x-srnivasan12112015-110x110.png",
                                    "given_name": "Vasanthi",
                                    "urls": {
                                      "blog": null,
                                      "twitter": null,
                                      "facebook": null
                                    },
                                    "position": {
                                      "organization_name": "IIM Bangalore",
                                      "title": "Professor, Organizational Behaviour and Human Resource Management"
                                    },
                                    "works": [],
                                    "slug": "vasanthi-srinivasan"
                                  }
                                ],
                                "announcement": "2016-09-20T00:00:00Z",
                                "end": "2017-09-28T03:30:00Z",
                                "uuid": "a4cd01be-5ba6-4818-84a8-963f0460a2cf",
                                "title": "People Management for Entrepreneurs",
                                "certificate_url": null,
                                "enrollment_start": null,
                                "start": "2017-08-03T04:00:00Z",
                                "min_effort": null,
                                "short_description": "Learn human resources best practices to enhance your business culture and be an effective people manager.",
                                "hidden": false,
                                "level_type": "Intermediate",
                                "type": "verified",
                                "enrollment_open_date": "Jan 01, 1900",
                                "marketing_url": "https://www.edx.org/course/people-management-entrepreneurs-iimbx-hr102x",
                                "is_course_ended": false,
                                "instructors": [],
                                "full_description": "<p>All entrepreneurs, by definition are people managers. As founder and owners, they hire people, groom them, motivate them, and harness their talent towards effective management of enterprise. Yet most entrepreneur believe that effective people management is common sense and is acquired through life experience.</p>\n<p>While there is some truth to this belief, people management is also a science .It also comprises of principles, procedures and systems that need to be in place as the enterprise begin to groom. Many owners agree that in today’s economy people are the key differentiators in small and medium businesses.</p>\n<p>The objective of the course is to create awareness on :</p>\n<ul>\n<li>The key principles of people management.</li>\n<li>Critically understand how HR practices contribute to the enterprise sustainability in the long run.</li>\n<li>Understand the role that owner/founders play in creating high performing organization.</li>\n</ul>\n<p>The best ideas and strategies are of no consequence without the right people to translate them to action and we would aim at throwing some light on these aspects.</p>",
                                "key": "course-v1:IIMBx+HR102x+2T2017",
                                "enrollment_end": null,
                                "reporting_type": "mooc",
                                "advertised_start": null,
                                "mobile_available": false,
                                "modified": "2017-04-03T12:37:43.210446Z",
                                "is_enrolled": false,
                                "pacing_type": "instructor_paced",
                                "video": null
                              }
                            ]
                          }
                        ],
                        "weeks_to_complete_max": 11,
                        "weeks_to_complete_min": 6
                      },
                      "urls": {
                        "program_listing_url": "/dashboard/programs/",
                        "commerce_api_url": "/api/commerce/v0/baskets/",
                        "track_selection_url": "/course_modes/choose/"
                      },
                      "userPreferences": {
                        "account_privacy": "all_users"
                      }
                    },

                 initialize: function(options) {
console.log('2017');
                     // hack for dev
                     this.options = this.data; //options;
                     this.programModel = new Backbone.Model(this.options.programData);
                     this.courseCardCollection = new CourseCardCollection(
                        this.programModel.get('courses'),
                        this.options.userPreferences
                    );
                     this.render();
                 },

                 render: function() {
                     HtmlUtils.setHtml(this.$el, this.tpl());
                     this.postRender();
                 },

                 postRender: function() {
                     this.headerView = new HeaderView({
                         model: new Backbone.Model(this.options)
                     });
                     new CollectionListView({
                         el: '.js-course-list',
                         childView: CourseCardView,
                         collection: this.courseCardCollection,
                         context: this.options,
                         titleContext: {
                             el: 'h2',
                             title: 'Course List'
                         }
                     }).render();

                     new SidebarView({
                         el: '.sidebar',
                         context: this.options
                     }).render();
                 }
             });
         }
    );
}).call(this, define || RequireJS.define);
