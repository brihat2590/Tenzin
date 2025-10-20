"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactPurpose: "",
    role: "",
    message: "",
  });

  // Simple inline validation logic
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Enter a valid email address";
    if (!formData.contactPurpose.trim()) errors.contactPurpose = "Please select a contact purpose";
    if (!formData.role.trim()) errors.role = "Please select your role";
    if (!formData.message.trim() || formData.message.length < 10)
      errors.message = "Message must be at least 10 characters long";

    return errors;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      const newErrors = { ...formErrors };
      delete newErrors[field];
      setFormErrors(newErrors);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast.error("⚠️ Please fix the form errors before submitting.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", contactPurpose: "", role: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="max-w-3xl min-h-screen mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-google-blue mb-4">
          Get In Touch
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, creative projects, 
          and professional collaborations. Let's bring your ideas to life.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-3 ">
            <Label htmlFor="name" className="font-medium text-white">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="John Doe"
              className={` text-white scan-effect transition-all duration-300 bg-black/50 ${
                formErrors.name ? "border-google-blue focus-visible:ring-google-blue" : "border-white/20"
              }`}
            />
            {formErrors.name && (
              <p className="text-sm text-google-blue font-medium">{formErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-3 text-white">
            <Label htmlFor="email" className=" font-medium">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="example@email.com"
              className={`scan-effect transition-all duration-300 ${
                formErrors.email ? "border-google-blue focus-visible:ring-google-blue" : ""
              }`}
            />
            {formErrors.email && (
              <p className="text-sm text-google-blue font-medium">{formErrors.email}</p>
            )}
          </div>
        </div>

        {/* Professional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Purpose */}
          <div className="space-y-3">
            <Label className="text-white font-medium">Contact Purpose *</Label>
            <Select 
              value={formData.contactPurpose} 
              onValueChange={(value) => handleInputChange("contactPurpose", value)}
            >
              <SelectTrigger className={`scan-effect border rounded-xl px-4 py-3 w-full sm:w-90 text-white shadow-lg transition-all duration-300 ${
                formErrors.contactPurpose ? "border-google-blue" : "border-white/20"
              }`}>
                <SelectValue placeholder="What brings you here?" />
              </SelectTrigger>
              <SelectContent className="bg-black/80 border border-white/10 backdrop-blur-xl text-white rounded-xl">
                <SelectItem value="project">Project Collaboration</SelectItem>
                <SelectItem value="job">Job Opportunity</SelectItem>
                <SelectItem value="freelance">Freelance Work</SelectItem>
                <SelectItem value="consultation">Technical Consultation</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formErrors.contactPurpose && (
              <p className="text-sm text-google-blue font-medium">{formErrors.contactPurpose}</p>
            )}
          </div>

          {/* Your Role */}
          <div className="space-y-3">
            <Label className="text-white font-medium">Your Role *</Label>
            <Select 
              value={formData.role} 
              onValueChange={(value) => handleInputChange("role", value)}
            >
              <SelectTrigger className={`scan-effect border rounded-xl px-4 py-3 text-white shadow-lg w-full sm:w-90 transition-all duration-300 ${
                formErrors.role ? "border-google-blue" : "border-white/20"
              }`}>
                <SelectValue placeholder="Who are you?" />
              </SelectTrigger>
              <SelectContent className="bg-black/80 border border-white/10 backdrop-blur-xl text-white rounded-xl">
                <SelectItem value="recruiter">Recruiter</SelectItem>
                <SelectItem value="client">Client</SelectItem>
                <SelectItem value="developer">Fellow Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="entrepreneur">Entrepreneur</SelectItem>
                <SelectItem value="student">Student</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {formErrors.role && (
              <p className="text-sm text-google-blue font-medium">{formErrors.role}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3 text-white">
          <Label htmlFor="message" className=" font-medium">Your Message *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            placeholder="Tell me about your project, opportunity, or what you have in mind..."
            className={`scan-effect min-h-[140px] transition-all duration-300 ${
                formErrors.message ? "border-google-blue focus-visible:ring-google-blue" : ""

              
            }`}
          />
          {formErrors.message && (
            <p className="text-sm text-google-blue font-medium">{formErrors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="google-button w-full bg-google-blue hover:bg-google-blue/90 text-white gdg-glow font-semibold py-3 text-lg transition-all duration-300 mt-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col sm:flex-row gap-6 text-white/70 text-sm">
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>response@portfolio.dev</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
}