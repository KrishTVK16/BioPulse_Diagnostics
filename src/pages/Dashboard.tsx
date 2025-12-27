import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dna, LogOut, Sun, Moon, Menu, X, ChevronLeft, ChevronRight,
  Compass, Clock, HelpCircle, BarChart3, Settings,
  FileText, Calendar, Users, Activity, Zap, MessageCircle,
  Bell, User, Globe, Palette, Shield, TrendingUp,
  AlertCircle, CheckCircle2, Video, Book, Phone, Mail
} from 'lucide-react';

type ViewType = 'overview' | 'activity' | 'support' | 'insights' | 'settings';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentView, setCurrentView] = useState<ViewType>('overview');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render different main content based on currentView
  const renderMainContent = () => {
    switch (currentView) {
      case 'overview':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-heading font-bold text-brand-text">Dashboard Overview</h1>

            {/* Daily KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-brand-accent transition-all duration-300 shadow-lg group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-brand-accent/20 rounded-lg">
                    <Calendar className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-textSec">Appointments</div>
                    <div className="text-3xl font-bold text-brand-accent group-hover:scale-105 transition-transform">34</div>
                  </div>
                </div>
                <div className="text-xs text-brand-textSec">Today's Schedule</div>
              </div>

              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-brand-accentSec transition-all duration-300 shadow-lg group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-brand-accentSec/20 rounded-lg">
                    <Activity className="h-6 w-6 text-brand-accentSec" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-textSec">Procedures</div>
                    <div className="text-3xl font-bold text-brand-accentSec group-hover:scale-105 transition-transform">12</div>
                  </div>
                </div>
                <div className="text-xs text-brand-textSec">Completed Today</div>
              </div>

              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-blue-400 transition-all duration-300 shadow-lg group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-blue-400/20 rounded-lg">
                    <FileText className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-textSec">Samples</div>
                    <div className="text-3xl font-bold text-blue-400 group-hover:scale-105 transition-transform">142</div>
                  </div>
                </div>
                <div className="text-xs text-brand-textSec">Processed Today</div>
              </div>

              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-red-400 transition-all duration-300 shadow-lg group">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-red-400/20 rounded-lg">
                    <AlertCircle className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <div className="text-sm text-brand-textSec">Critical</div>
                    <div className="text-3xl font-bold text-red-400 group-hover:scale-105 transition-transform">5</div>
                  </div>
                </div>
                <div className="text-xs text-brand-textSec">Urgent Cases</div>
              </div>
            </div>

            {/* Patient Flow Timeline */}
            <div className="bg-brand-bgSec border border-brand-border rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-heading font-bold text-brand-text mb-6">Patient Flow</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-brand-textSec font-medium">Stage 1</div>
                  <div className="flex-1 relative pl-8 pb-8 border-l-4 border-brand-accent/50">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-accent shadow-[0_0_10px_var(--brand-accent)]"></div>
                    <h3 className="text-lg font-bold text-brand-text mb-1">Check-in</h3>
                    <p className="text-brand-textSec text-sm">Patient registration and initial verification completed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-brand-textSec font-medium">Stage 2</div>
                  <div className="flex-1 relative pl-8 pb-8 border-l-4 border-brand-accent/50">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-accent shadow-[0_0_10px_var(--brand-accent)]"></div>
                    <h3 className="text-lg font-bold text-brand-text mb-1">Consultation</h3>
                    <p className="text-brand-textSec text-sm">Doctor examination and diagnosis in progress</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-32 text-brand-textSec font-medium">Stage 3</div>
                  <div className="flex-1 relative pl-8">
                    <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-brand-accentSec shadow-[0_0_10px_var(--brand-accentSec)]"></div>
                    <h3 className="text-lg font-bold text-brand-text mb-1">Treatment</h3>
                    <p className="text-brand-textSec text-sm">Treatment plan execution and follow-up scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 text-center hover:border-yellow-400 transition-all duration-300 shadow-lg group">
                <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform">19</div>
                <div className="text-brand-textSec text-sm">Pending Reports</div>
              </div>

              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 text-center hover:border-green-400 transition-all duration-300 shadow-lg group">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">87</div>
                <div className="text-brand-textSec text-sm">Active Patients</div>
              </div>

              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 text-center hover:border-purple-400 transition-all duration-300 shadow-lg group">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform">23</div>
                <div className="text-brand-textSec text-sm">Staff Online</div>
              </div>
            </div>
          </div>
        );

      case 'activity':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-heading font-bold text-brand-text">Recent Activity</h1>

            <div className="space-y-4">
              {/* Activity Timeline */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-bold text-brand-text mb-6 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-brand-accent" />
                  Activity Timeline
                </h2>
                <div className="space-y-4">
                  {[
                    { color: 'green', title: 'Report Generated', desc: 'Blood Test - Patient #1234', time: '2 min ago', icon: CheckCircle2 },
                    { color: 'blue', title: 'New Appointment', desc: 'Dr. Smith - 2:30 PM', time: '15 min ago', icon: Calendar },
                    { color: 'yellow', title: 'System Update', desc: 'Database backup completed', time: '1 hour ago', icon: AlertCircle },
                    { color: 'purple', title: 'Patient Registered', desc: 'John Doe - ID #5678', time: '2 hours ago', icon: User },
                    { color: 'green', title: 'Test Completed', desc: 'X-Ray Scan - Patient #9101', time: '3 hours ago', icon: Activity },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={idx} className="flex items-start space-x-4 p-4 rounded-lg border border-brand-border hover:border-brand-accent/50 transition-all">
                        <div className={`w-10 h-10 rounded-full bg-${item.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`h-5 w-5 text-${item.color}-400`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-brand-text font-bold">{item.title}</p>
                          <p className="text-sm text-brand-textSec">{item.desc}</p>
                          <span className="text-xs text-brand-textSec opacity-70">{item.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-heading font-bold text-brand-text">Support & Help</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Live Chat */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-purple-400/50 transition-all shadow-lg cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <MessageCircle className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-xs text-green-400">Online</span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Live Chat</h3>
                <p className="text-brand-textSec text-sm">Connect with our support team in real-time</p>
              </div>

              {/* Documentation */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-blue-400/50 transition-all shadow-lg cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <Book className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Documentation</h3>
                <p className="text-brand-textSec text-sm">Browse our comprehensive guides and tutorials</p>
              </div>

              {/* Video Tutorials */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-red-400/50 transition-all shadow-lg cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <Video className="h-8 w-8 text-red-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Video Tutorials</h3>
                <p className="text-brand-textSec text-sm">Watch step-by-step video guides</p>
              </div>

              {/* Contact Support */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 hover:border-brand-accent/50 transition-all shadow-lg cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <Phone className="h-8 w-8 text-brand-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-2">Contact Support</h3>
                <p className="text-brand-textSec text-sm">Reach us via phone or email</p>
              </div>
            </div>

            {/* Support Banner */}
            <div className="bg-gradient-to-r from-purple-500/10 to-brand-accent/10 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-2">24/7 Support Available</h3>
              <p className="text-brand-textSec">Our dedicated support team is here to help you anytime, anywhere. We typically respond within 5 minutes.</p>
            </div>
          </div>
        );

      case 'insights':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-heading font-bold text-brand-text">Data Insights</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* System Status */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-green-400" />
                  System Status
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-brand-textSec">System Health</span>
                      <span className="text-sm font-bold text-green-400">Optimal (92%)</span>
                    </div>
                    <div className="w-full bg-brand-bg h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-brand-accent w-[92%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-brand-textSec">Queue Load</span>
                      <span className="text-sm font-bold text-yellow-400">Moderate (67%)</span>
                    </div>
                    <div className="w-full bg-brand-bg h-3 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 w-[67%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-brand-text mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-brand-bg rounded border border-brand-border text-center">
                    <div className="text-2xl font-bold text-brand-accent mb-1">98.5%</div>
                    <div className="text-xs text-brand-textSec">Uptime</div>
                  </div>
                  <div className="p-3 bg-brand-bg rounded border border-brand-border text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">1.2s</div>
                    <div className="text-xs text-brand-textSec">Avg Response</div>
                  </div>
                  <div className="p-3 bg-brand-bg rounded border border-brand-border text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">2.4k</div>
                    <div className="text-xs text-brand-textSec">Requests/hr</div>
                  </div>
                  <div className="p-3 bg-brand-bg rounded border border-brand-border text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">0.02%</div>
                    <div className="text-xs text-brand-textSec">Error Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Stats */}
            <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-brand-text mb-4">Real-time Activity</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-brand-bg rounded-lg border border-brand-accent/30">
                  <Activity className="h-6 w-6 text-brand-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-brand-accent">234</div>
                  <div className="text-xs text-brand-textSec">Active Sessions</div>
                </div>
                <div className="text-center p-4 bg-brand-bg rounded-lg border border-blue-400/30">
                  <Users className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">89</div>
                  <div className="text-xs text-brand-textSec">Online Staff</div>
                </div>
                <div className="text-center p-4 bg-brand-bg rounded-lg border border-green-400/30">
                  <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">156</div>
                  <div className="text-xs text-brand-textSec">Completed Today</div>
                </div>
                <div className="text-center p-4 bg-brand-bg rounded-lg border border-yellow-400/30">
                  <Clock className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400">23</div>
                  <div className="text-xs text-brand-textSec">In Queue</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-4xl font-heading font-bold text-brand-text">Settings & Profile</h1>

            {/* Profile Section */}
            <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-brand-text mb-6 flex items-center">
                <User className="h-5 w-5 mr-2 text-brand-accent" />
                Profile Information
              </h3>
              <div className="flex items-center space-x-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-brand-accent/30 flex items-center justify-center">
                  <User className="h-10 w-10 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-text">Admin User</h4>
                  <p className="text-brand-textSec">admin@biopulse.com</p>
                  <p className="text-sm text-brand-textSec mt-1">Administrator • ID: #12345</p>
                </div>
                <button className="px-4 py-2 bg-brand-accent/20 text-brand-accent rounded-lg hover:bg-brand-accent/30 transition-colors">
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Settings Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Notifications */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg hover:border-brand-accent/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Bell className="h-6 w-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-brand-text">Notifications</h3>
                  </div>
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full font-bold">3 New</span>
                </div>
                <p className="text-sm text-brand-textSec">Manage your notification preferences</p>
              </div>

              {/* Theme */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg hover:border-brand-accent/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Palette className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-brand-text">Theme</h3>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="text-xs bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-lg font-medium hover:bg-brand-accent/30 transition-colors"
                  >
                    {theme === 'dark' ? 'Dark' : 'Light'}
                  </button>
                </div>
                <p className="text-sm text-brand-textSec">Customize your visual experience</p>
              </div>

              {/* Language */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg hover:border-brand-accent/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-brand-text">Language</h3>
                  </div>
                  <span className="text-xs text-brand-textSec">English</span>
                </div>
                <p className="text-sm text-brand-textSec">Choose your preferred language</p>
              </div>

              {/* Security */}
              <div className="bg-brand-bgSec border border-brand-border rounded-xl p-6 shadow-lg hover:border-brand-accent/50 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6 text-green-400 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-brand-text">Security</h3>
                  </div>
                </div>
                <p className="text-sm text-brand-textSec">Manage security and privacy settings</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg transition-colors duration-300">
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 bg-brand-bgSec/95 backdrop-blur-md border-b border-brand-border transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <div className="relative">
                <Dna className="h-10 w-10 text-brand-accent animate-pulse" />
                <div className="absolute inset-0 bg-brand-accent blur-xl opacity-20 rounded-full"></div>
              </div>
              <span className="ml-3 text-2xl font-heading font-bold text-brand-text tracking-wide">
                Bio<span className="text-brand-accent">Pulse</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Admin Label */}
              <div className="px-4 py-2 bg-brand-bg rounded-lg border border-brand-border">
                <span className="text-brand-text font-medium">Admin</span>
              </div>

              {/* Sidebar Toggle */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-full text-brand-textSec hover:text-brand-accent hover:bg-brand-bg transition-colors"
                aria-label="Toggle Sidebar"
              >
                {isSidebarOpen ? <ChevronRight className="h-6 w-6" /> : <ChevronLeft className="h-6 w-6" />}
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-brand-textSec hover:text-brand-accent hover:bg-brand-bg transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-5 py-2 rounded-full bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors duration-300 border border-red-500/30"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-brand-textSec hover:text-brand-accent hover:bg-brand-bg transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-textSec hover:text-brand-text hover:bg-brand-bg focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="block h-8 w-8 text-brand-accent" /> : <Menu className="block h-8 w-8 text-brand-accent" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full h-screen bg-black/50 z-40" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="absolute right-0 top-0 w-64 h-full bg-brand-bgSec shadow-2xl p-6 flex flex-col space-y-4 transform transition-transform duration-300 border-l border-brand-border overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Admin Label */}
              <div className="px-4 py-2 bg-brand-bg rounded-lg border border-brand-border text-center">
                <span className="text-brand-text font-medium">Admin</span>
              </div>

              <div className="w-full h-px bg-brand-border"></div>

              {/* Navigation Buttons */}
              <button
                onClick={() => { handleViewChange('overview'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${currentView === 'overview'
                    ? 'bg-brand-accent/20 border border-brand-accent text-brand-accent'
                    : 'bg-brand-bg border border-brand-border text-brand-text hover:border-brand-accent/50'
                  }`}
              >
                <Compass className="h-5 w-5" />
                <span className="font-medium">Quick Overview</span>
              </button>

              <button
                onClick={() => { handleViewChange('activity'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${currentView === 'activity'
                    ? 'bg-brand-accentSec/20 border border-brand-accentSec text-brand-accentSec'
                    : 'bg-brand-bg border border-brand-border text-brand-text hover:border-brand-accentSec/50'
                  }`}
              >
                <Clock className="h-5 w-5" />
                <span className="font-medium">Recent Activity</span>
              </button>

              <button
                onClick={() => { handleViewChange('support'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${currentView === 'support'
                    ? 'bg-purple-400/20 border border-purple-400 text-purple-400'
                    : 'bg-brand-bg border border-brand-border text-brand-text hover:border-purple-400/50'
                  }`}
              >
                <HelpCircle className="h-5 w-5" />
                <span className="font-medium">Support & Help</span>
              </button>

              <button
                onClick={() => { handleViewChange('insights'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${currentView === 'insights'
                    ? 'bg-blue-400/20 border border-blue-400 text-blue-400'
                    : 'bg-brand-bg border border-brand-border text-brand-text hover:border-blue-400/50'
                  }`}
              >
                <BarChart3 className="h-5 w-5" />
                <span className="font-medium">Data Insights</span>
              </button>

              <button
                onClick={() => { handleViewChange('settings'); setIsMobileMenuOpen(false); }}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${currentView === 'settings'
                    ? 'bg-brand-accent/20 border border-brand-accent text-brand-accent'
                    : 'bg-brand-bg border border-brand-border text-brand-text hover:border-brand-accent/50'
                  }`}
              >
                <Settings className="h-5 w-5" />
                <span className="font-medium">Settings & Profile</span>
              </button>

              <div className="w-full h-px bg-brand-border"></div>

              {/* Logout Button */}
              <button
                onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors border border-red-500/30"
              >
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Container with Sidebar */}
      <div className="flex relative">
        {/* Dashboard Content */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'mr-80' : 'mr-0'} px-4 sm:px-6 lg:px-8 py-12`}>
          <div className="max-w-7xl mx-auto">
            {renderMainContent()}
          </div>
        </main>

        {/* Right Sidebar - Navigation Menu */}
        <aside
          className={`fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-brand-bgSec/95 backdrop-blur-md border-l border-brand-border shadow-2xl transition-transform duration-300 ease-in-out z-40 overflow-y-auto ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
            } hidden md:block`}
        >
          <div className="p-6 space-y-4">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-heading font-bold text-brand-text">Quick Panel</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 rounded-full text-brand-textSec hover:text-brand-accent hover:bg-brand-bg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => handleViewChange('overview')}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${currentView === 'overview'
                ? 'bg-brand-accent/20 border-2 border-brand-accent text-brand-accent'
                : 'bg-brand-bg border border-brand-border text-brand-text hover:border-brand-accent/50'
                }`}
            >
              <Compass className="h-5 w-5" />
              <span className="font-semibold">Quick Overview</span>
            </button>

            <button
              onClick={() => handleViewChange('activity')}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${currentView === 'activity'
                ? 'bg-brand-accentSec/20 border-2 border-brand-accentSec text-brand-accentSec'
                : 'bg-brand-bg border border-brand-border text-brand-text hover:border-brand-accentSec/50'
                }`}
            >
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Recent Activity</span>
            </button>

            <button
              onClick={() => handleViewChange('support')}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${currentView === 'support'
                ? 'bg-purple-400/20 border-2 border-purple-400 text-purple-400'
                : 'bg-brand-bg border border-brand-border text-brand-text hover:border-purple-400/50'
                }`}
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-semibold">Support & Help</span>
            </button>

            <button
              onClick={() => handleViewChange('insights')}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${currentView === 'insights'
                ? 'bg-blue-400/20 border-2 border-blue-400 text-blue-400'
                : 'bg-brand-bg border border-brand-border text-brand-text hover:border-blue-400/50'
                }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span className="font-semibold">Data Insights</span>
            </button>

            <button
              onClick={() => handleViewChange('settings')}
              className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all ${currentView === 'settings'
                ? 'bg-brand-accent/20 border-2 border-brand-accent text-brand-accent'
                : 'bg-brand-bg border border-brand-border text-brand-text hover:border-brand-accent/50'
                }`}
            >
              <Settings className="h-5 w-5" />
              <span className="font-semibold">Settings & Profile</span>
            </button>

            {/* User Profile Card */}
            <div className="mt-6 bg-gradient-to-br from-brand-accent/20 to-brand-accentSec/20 rounded-xl p-4 border border-brand-accent/30">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-brand-accent/30 flex items-center justify-center">
                  <User className="h-6 w-6 text-brand-accent" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-brand-text">Admin User</p>
                  <p className="text-xs text-brand-textSec">admin@biopulse.com</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Sidebar Toggle Button */}
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed bottom-8 right-8 p-4 bg-brand-accent rounded-full shadow-2xl hover:scale-110 transition-transform z-50 hidden md:block"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
