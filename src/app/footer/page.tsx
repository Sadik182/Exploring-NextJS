export default function Footer() {

    return(
        <footer className="text-center bg-gray-300 text-black py-8">
            <p className="text-sm">@ {new Date().getFullYear()} Sadikur Rahman. All rights reserved.</p>
            <p className="text-sm">
                <a href="/privacy" className="hover:underline ml-2">Privacy Policy</a>
                <a href="/terms" className="hover:underline ml-2">Terms of Services</a>
            </p>
        </footer>
    )
}