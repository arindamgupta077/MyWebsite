import dxcLogo from '@/app/assets/jpg/dxc.png';
import itcLogo from '@/app/assets/jpg/ITC_Infotech_Logo.jpg';
import microproLogo from '@/app/assets/jpg/micropro.png';

export const experiences = [
  {
    id: 1,
    title: 'Senior Oracle Database Administrator',
    company: "ITC Infotech",
    duration: "(2024 Nov - Present)",
    logo: itcLogo,
    description: "Architected, installed, and administered Oracle 12c/19c databases on Linux and Windows, managing Oracle RAC and ASM configurations to deliver high availability, load balancing, and fault tolerance.\n\n❖ Database migration using full database/schema/table refresh using export and import(Datapump utility).\n\n❖ Owned end-to-end backup, recovery, and DR strategy, implementing RMAN full/incremental backups, database refreshes (RMAN, EXPDP/IMPDP), and successfully executing Data Guard build, switchover, and DR drills, reducing recovery time objectives (RTO) by 30%.\n\n❖ Implemented a variety of tasks, including DB link building, GRP creation, Password reset, Auditing, Redo log resizing, and standby sync Issues in Dataguard.\n\n❖ Planned and executed patching strategies, applying PSU and one-off patches on standalone and multi-node RAC environments, coordinating change management and reducing post-patch incidents by 35%.\n\n❖ Built standby database to configure Dataguard, performed DR-drill, and switch over activities.\n\n❖ Led major database upgrades and migrations, including 12c → 19c upgrades and HP-UX to SUSE Linux migrations, ensuring zero data loss and minimal downtime for production systems.\n\n❖ Drove database performance tuning initiatives, analyzing AWR/ASH reports, optimizing SQL, indexes, and storage structures, resulting in 25–40% improvement in query performance for critical workloads.\n\n❖ Automated routine DBA operations using shell scripting and cron, including RMAN scheduling, tablespace/diskgroup monitoring, and alerting, improving operational efficiency by 20% and reducing manual intervention.\n\n❖ Acted as escalation owner and technical mentor, guiding junior DBAs, standardizing DBA processes, and collaborating with application and infrastructure teams to resolve high-severity incidents within SLA"
  },
  {
    id: 3,
    title: "Oracle Database Administrator",
    company: "DXC Technology",
    duration: "(2021 Jan - 2024 Nov)",
    logo: dxcLogo,
    description: "✦ Worked as Oracle Database Administrator in banking domain (BSFI) and learned L2 activities.\n\n✦ High-Availability Architecture: Installed, configured, and managed Oracle Database 12c/19c on Linux/Windows, overseeing Oracle RAC (up to 16 nodes) and ASM environments to ensure 99.9% uptime and load balancing.\n\n✦ Disaster Recovery: Configured and maintained Oracle Data Guard standby databases; conducted periodic DR drills, switchovers, and resolved standby synchronization lag.\n\n✦ Backup & Recovery: Managed backup lifecycles using RMAN (Full/Incremental)\n\n✦ Patch Management: Applied quarterly PSU/CPU patches and one-off patches to Grid Infrastructure and Database homes in multi-node cluster environments.\n\n✦ Automation: Engineered shell scripts to automate routine maintenance tasks, achieving a 20% improvement in operational efficiency.\n\n✦ Security Administration: Managed user lifecycles granted privileges/roles, and implemented auditing policies to ensure compliance with banking security standards.\n\n✦ Monitoring: Leveraged Oracle Enterprise Manager (OEM) for proactive health checks, target configuration, blackout management, and server resource monitoring.\n\n✦ General Administration: Handled daily L2 DBA activities including tablespace management, datafile resizing, DB link creation, and password management.\n\n✦ Additional Skills: Provided administration support for MSSQL database environments"
  },
  {
    id: 4,
    title: "Intern",
    company: "Micropro",
    duration: "(2019 - 2020)",
    logo: microproLogo,
    description: "● Designed and developed end-to-end IoT solutions for smart home automation, integrating sensors, actuators, and cloud services.\n● Implemented real-time data acquisition systems using MQTT and RESTful APIs for seamless communication between devices and servers.\n● Conducted edge computing implementations on Raspberry Pi and ESP32 to optimize device responsiveness and reduce cloud dependency.\n● Developed dashboards using Power BI and custom applications to visualize IoT data for actionable insights.\n● Enhanced system security by implementing TLS encryption, device authentication protocols, and secure boot mechanisms.\n\nInternet of Things (IoT)"
  }
]