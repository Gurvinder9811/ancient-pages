import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, BookOpen, ArrowLeft, CheckCircle } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f4ecd8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <BookOpen className="h-10 w-10 text-[#01307b]" />
            <span className="text-3xl font-serif font-bold text-[#01307b]">Scriptoria</span>
          </Link>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-[#d4c4a8] p-8">
          {!isSubmitted ? (
            <>
              {/* Back Link */}
              <Link
                to="/login"
                className="inline-flex items-center text-[#5c4a3a] hover:text-[#01307b] mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to login
              </Link>

              <h1 className="text-2xl font-serif font-bold text-[#01307b] mb-2">
                Forgot Password?
              </h1>
              <p className="text-[#5c4a3a] mb-6">
                No worries! Enter your email address and we'll send you instructions to reset your password.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#01307b] font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#8b7355]" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="scholar@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-[#d4c4a8] focus:border-[#01307b] focus:ring-[#01307b] bg-[#faf6ef]"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#01307b] hover:bg-[#01307b]/90 text-white font-semibold text-lg transition-all"
                >
                  Send Reset Link
                </Button>
              </form>

              {/* Additional Help */}
              <div className="mt-6 p-4 bg-[#f4ecd8]/50 rounded-lg border border-[#d4c4a8]">
                <p className="text-sm text-[#5c4a3a]">
                  <strong className="text-[#01307b]">Need help?</strong> If you're having trouble accessing your account, please{" "}
                  <Link to="/contact" className="text-[#01307b] hover:underline">
                    contact our support team
                  </Link>.
                </p>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-serif font-bold text-[#01307b] mb-2">
                Check Your Email
              </h1>
              <p className="text-[#5c4a3a] mb-6">
                We've sent password reset instructions to{" "}
                <strong className="text-[#01307b]">{email}</strong>
              </p>
              <p className="text-sm text-[#8b7355] mb-6">
                Didn't receive the email? Check your spam folder or{" "}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#01307b] hover:underline font-medium"
                >
                  try again
                </button>
              </p>
              <Link to="/login">
                <Button
                  variant="outline"
                  className="w-full h-12 border-[#01307b] text-[#01307b] hover:bg-[#01307b] hover:text-white transition-all"
                >
                  Back to Login
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-[#8b7355]">
          Remember your password?{" "}
          <Link to="/login" className="text-[#01307b] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
